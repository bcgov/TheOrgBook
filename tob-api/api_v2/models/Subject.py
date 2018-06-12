from django.db import models
from django.utils import timezone

from auditable.models import Auditable


class Subject(Auditable):
    source_id = models.TextField(blank=True, null=True)

    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField(blank=True, null=True)

    class Meta:
        db_table = "subject"
