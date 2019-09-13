import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { IIssuer } from 'app/core/interfaces/i-issuer.interface';
import { ICredentialSet } from 'app/core/interfaces/i-credential-set.interface';
import { ICredential } from 'app/core/interfaces/i-credential.interface';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-topic-archive-list-header',
  template: `
    <div
      class="row cred-row"
      (click)="expanded = !expanded"
      [ngClass]="{ 'border-bottom': expanded === false }"
    >
      <div class="col-sm-4">
        <div class="cred-title">
          <a class="body-link cred-link">{{
            currentCred.credential_type.description
          }}</a>
        </div>
        <!-- *ngIf="cred.effective_date && cred.effective_date > '0100-01-01'; else ifBlank" -->
        <div class="cred-date">
          <span class="claim-info date">{{
            currentCred.effective_date | dateFormat: 'effectiveDate'
          }}</span>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="cred-issuer">
          <!--    [routerLink]="['/issuer', issuer.id] | localize" -->
          <a class="body-link issuer-link">{{
            currentCred.credential_type.issuer.name
          }}</a>
        </div>
      </div>

      <div class="col-sm-3">
        <ng-container
          *ngIf="
            currentCred.related_topics?.length;
            then relatedName;
            else topicName
          "
        >
        </ng-container>
        <ng-template #relatedName>
          <a
            [routerLink]="currentCred.related_topics[0].link | localize"
            class="body-link cred-link related"
            *ngIf="currentCred.related_topics[0].names?.length"
          >
            <!--
       TODO: correct this for related credentials.
       {{ currentCred.relatedPreferredName }}
       -->
            currentCred.related_topics[0].names.text
          </a>
        </ng-template>
        <ng-template #topicName>
          <!--- TODO: this is identified as an issue in github as this link does not produces the correct results.
        [routerLink]="currentCred.topic.link | localize"
          --->

          <a class="body-link cred-link name">
            {{ currentCred.topic.local_name.text }}
          </a>
        </ng-template>
        <ng-template #ifBlank>
          <div class="col-sm-8">{{ 'cred.empty-attribute' | translate }}</div>
        </ng-template>
      </div>
      <ng-container *ngIf="credList.length > 0">
        <i class="fa fa-caret-up" *ngIf="expanded"></i>
        <i class="fa fa-caret-down" *ngIf="!expanded"></i>
      </ng-container>
    </div>
    <ng-container *ngIf="expanded">
      <ng-container *ngIf="credList.length > 0">
        <h5 p-1>Inactive Credentials</h5>
        <app-topic-archive-list-item
          *ngFor="let cred of credList"
          [details]="cred.credential_type.description"
          [endDate]="cred.credential_type.issuer.update_timestamp"
          [registerDate]="cred.credential_type.issuer.create_timestamp"
          [type]="cred.topic.local_name.text"
        ></app-topic-archive-list-item>
      </ng-container>
    </ng-container>
  `,
  styleUrls: [
    '../../../themes/_active/cred/cred.scss',
    '../../../themes/_active/cred/list.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// http://localhost:4300/en/organization/4b4a4d57-b589-4e2f-b22b-1d288a129da8/cred/1
export class TopicArchiveListHeaderComponent implements OnInit {
  @Input() credSet: ICredentialSet;
  @Input() issuer: IIssuer;
  @Input() url: string;
  currentCred: ICredential;
  expanded = false;
  credList: ICredential[];

  constructor() {}

  ngOnInit() {
    console.log('credSet', this.credSet);
    this.currentCred = this.credSet.credentials.filter(
      cred => cred.inactive === false
    )[0];
    this.credList = this.credSet.credentials.filter(
      cred => cred.inactive === true
    );
    // console.log(this.currentCred.credential_set[0].issuer);
  }
}
