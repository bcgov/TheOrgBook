
# OrgBook REST Services

OrgBook provides a SWAGGER page that provides an interactive way to test out its available API's.  This SWAGGER page is available in a local OrgBook install at http://localhost:8080/api/, or (for example) in a stable test deployment (hosted on the BC Gov OpenShift platform) at https://test.orgbook.gov.bc.ca/api/.

## Company Search

The main API for performing a company name search is :

```
http://localhost:8080/api/v2/search/autocomplete?category=<text to search>
```

This will return a list of company names matching the supplied search criteria.  The search is based on SOLR indexing and will return a list of companies based on closest match.  (If there is a company name with an exact match it will be first in the list.)  For example:

```
http://localhost:8080/api/v2/search/autocomplete?category="MY COMPANY CORP"
```

... will return the requested company, as well as close matches in name.  The returned JSON structure can be used to query for additional information about the company (note that the page size and initial index can be specified via additional REST API parameters):

```
{
    "total": 10,
    "first_index": 1,
    "last_index": 10,
    "results": [
        {
            "id": 99,
            "names": [
                {
                    "id": 99,
                    "text": "MY COMPANY CORP.",
                    "language": null,
                    "credential_id": 99,
                    "type": "entity_name"
                }
            ],
            "inactive": false
        },
        {
        ...
        }
    ]
}
```

The above API is useful for populating an "autocomplete" search drop-down, like the one on the OrgBook home page.

You can get a more detailed set of data using the "facets" version of the search:

```
http://localhost:8080/api/v2/search/credential/topic/facets?name=<text to search>
```

You can inspect the returned JSON structure.  One field useful for further searches is the "topic" ... "source_id", which is the BC Company number from BC Registries, for example (abbreviated for clarity):

```
"objects": {
    ...
    "results": [
        {
            ...
            "credential_set": {
                ...
            },
            "credential_type": {
                ...
            },
            "attributes": [
                ...
            ],
            "names": [
                ...
            ],
            "topic": {
                ...
                "source_id": "BC0123456",
                ...
            },
            "related_topics": []
        }
    }
```

You can use the source_id in, for example, the following:

```
http://localhost:8080/api/v2/topic/ident/registration/BC0123456/formatted
```

You can experiment with the API's using the SWAGGER page.

