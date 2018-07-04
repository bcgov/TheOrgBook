import { Injectable, Inject } from '@angular/core';
import { SearchClient } from './search.client';
import { SearchService } from './search.service';
import { SubjectResult } from '../data-types';


@Injectable()
export class SubjectSearchClient extends SearchClient<SubjectResult> {

  constructor(@Inject(SearchService) _service: SearchService) {
      super(_service);
  }

  loadResult(result: any): SubjectResult {
    return (new SubjectResult()).load(result);
  }

}
