import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredSearchClient } from './cred-search.client';
import { IssuerClient } from './issuer.client';
import { TopicClient } from './topic.client';
import { TopicCredClient } from './topic-cred.client';
import { IssuerCredentialTypeClient } from './credential-type.client';
import { NameSearchClient } from './name-search.client';
import { TopicSearchClient } from './topic-search.client';
import { SearchService } from './search.service';
import { SubjectSearchClient } from './subject-search.client';
import { SearchInputComponent } from './input.component';
import { SearchNavComponent } from './nav.component';


@NgModule({
  declarations: [
    SearchInputComponent,
    SearchNavComponent,
  ],
  providers: [
    CredSearchClient,
    IssuerClient,
    TopicClient,
    TopicCredClient,
    IssuerCredentialTypeClient,
    NameSearchClient,
    TopicSearchClient,
    SearchService,
    SubjectSearchClient,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchInputComponent,
    SearchNavComponent,
  ]
})
export class SearchModule {}

