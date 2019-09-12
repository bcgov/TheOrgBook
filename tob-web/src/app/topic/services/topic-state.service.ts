import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICredentialSet } from 'app/core/interfaces/i-credential-set.interface';

export type StateOptions = 'true' | 'false' | '';
@Injectable({
  providedIn: 'root'
})
export class TopicStateService {
  currentState: StateOptions;

  filterActive = 'true';

  private credentialSets$ = new BehaviorSubject<ICredentialSet[]>(null)

get credentialSets() {
    return this.credentialSets$.asObservable();
  }

  setCredential(credSets: ICredentialSet[]) {
    this.credentialSets$.next(credSets);
  }


  constructor() { }



}
