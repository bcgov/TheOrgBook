import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IIssuer } from 'app/core/interfaces/i-issuer.interface';
import { ICredentialSet } from 'app/core/interfaces/i-credential-set.interface';
import { ICredential } from 'app/core/interfaces/i-credential.interface';

@Component({
  selector: 'app-topic-archive-list-header',
  template: `
  <div class="row cred-row">
    <div class="col-sm-4">
      <div class="cred-title">
        <a class="body-link cred-link" [routerLink]="url | localize">{{currentCred.credential_type.description}}</a>
      </div>
      <!-- *ngIf="cred.effective_date && cred.effective_date > '0100-01-01'; else ifBlank" -->
      <div class="cred-date" >
        <span class="claim-info date">{{currentCred.effective_date | dateFormat: 'effectiveDate'}}</span>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="cred-issuer" *ngIf="issuer">
        <a class="body-link issuer-link" [routerLink]="['/issuer', issuer.id] | localize">{{issuer.name}}</a>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="label label-warning" *ngIf="currentCred.inactive" translate>cred.inactive</div>
      <div class="label label-danger" *ngIf="currentCred.revoked" translate>cred.expired</div>
    </div>
  </div>
  <ng-template #ifBlank>
    <div class="col-sm-8">{{'cred.empty-attribute' | translate}}</div>
  </ng-template>
  `,
  styleUrls: ['./topic-archive-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// http://localhost:4300/en/organization/4b4a4d57-b589-4e2f-b22b-1d288a129da8/cred/1
export class TopicArchiveListHeaderComponent implements OnInit {
  @Input() credSet: ICredentialSet;
  @Input() issuer: IIssuer;
  @Input() url: string;
  currentCred: ICredential;
  expanded = false;

  constructor() { }

  ngOnInit() {
    this.currentCred = this.credSet.credentials.filter(cred => cred.inactive === false)[0]
  }

}
