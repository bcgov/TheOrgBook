import asyncio
import argparse
import json
import os
import sys
import time
import aiohttp

from django.core.management.base import BaseCommand, CommandError
from django.db import transaction, DEFAULT_DB_ALIAS
from django.db.models import signals

from api_v2.models.Address import Address
from api_v2.models.Attribute import Attribute
from api_v2.models.Credential import Credential
from api_v2.models.Name import Name

from tob_api.rocketchat_hooks import log_error, log_warning, log_info

from asgiref.sync import async_to_sync

API_BASE_URL = os.environ.get('APPLICATION_URL', 'http://localhost:8080')
API_PATH = os.environ.get('API_PATH', '/api/v2')
API_URL = "{}{}".format(API_BASE_URL, API_PATH)

class Command(BaseCommand):
    help = "Verify the the indexes for all of the credentials."

    def handle(self, *args, **options):
        self.reprocess(*args, **options)
    
    @async_to_sync
    async def reprocess(self, *args, **options):
        self.stdout.write("Starting ...")

        cred_count = Credential.objects.count()
        self.stdout.write("Verifying the indexes for {} credentials ...".format(cred_count))

        async with aiohttp.ClientSession() as http_client:
            current_cred = 0
            for credential in Credential.objects.all().iterator():
                current_cred += 1
                self.stdout.write(
                    "\nVerifying index for credential id: {} ({} of {}) ...".format(
                        credential.id, current_cred, cred_count
                    )
                )

                try:
                    # Query search API using the wallet_id; credential.wallet_id
                    response = await http_client.get(
                        '{}/search/credential/topic/facets'.format(API_URL),
                        params={ 'format':'json', 'wallet_id': credential.wallet_id}
                        )

                    self.stdout.write(
                        "\t{}"
                        .format(response.url))

                    if response.status != 200:
                        raise RuntimeError(
                            'Credential index could not be processed: {}'.format(await response.text())
                            )

                    result_json = await response.json()
                except Exception as exc:
                    raise Exception(
                        'Could not verify credential index. '
                        'Is the OrgBook running?') from exc

                credentialCount = result_json["objects"]["total"]

                if credentialCount < 1:
                    msg = "Error - No index was found for credential id: {}, wallet_id: {}".format(credential.id, credential.wallet_id)
                    self.stdout.write(msg)
                    await log_error(msg)

                elif  credentialCount > 1:
                    msg = "Error - More than one index was found for credential id: {}, wallet_id: {}".format(credential.id, credential.wallet_id)
                    self.stdout.write(msg)
                    await log_error(msg)

                else:
                    msg = "Index successfully verified for credential id: {}, wallet_id: {}".format(credential.id, credential.wallet_id)
                    self.stdout.write(msg)
                    await log_info(msg)
