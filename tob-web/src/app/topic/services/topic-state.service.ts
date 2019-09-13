import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ICredentialSet } from 'app/core/interfaces/i-credential-set.interface';
import { shareReplay } from 'rxjs/operators';

export type StateOptions = 'true' | 'false' | '';
@Injectable({
  providedIn: 'root'
})
export class TopicStateService {
  currentState: StateOptions;

  filterActive = 'true';

  private credentialSets$ = new BehaviorSubject<ICredentialSet[]>(null);

  get credentialSets() {
    return this.credentialSets$.asObservable();
  }

  setCredential(credSets: ICredentialSet[]) {
    this.credentialSets$.next(credSets);
  }

  constructor() {
    // of(this.filterActive)
    //   .pipe(shareReplay(100))
    //   .subscribe(obs => console.log(obs));

    this.credentialSets.subscribe(obs => console.log('cred set', obs));
  }
}
