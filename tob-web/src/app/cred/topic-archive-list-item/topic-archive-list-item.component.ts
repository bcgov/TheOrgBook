import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ICredential } from 'app/core/interfaces/i-credential.interface';

@Component({
  selector: 'app-topic-archive-list-item',
  template: `
    <div class="row border-bottom p-2">
      <div class="col-sm-4">
        <p class="m-0">
          <span><i class="fa fa-certificate"></i></span
          ><span class="ml-2">{{ details }}</span>
        </p>
        <p class="m-0">
          <span><i class="fa fa-calendar"></i></span
          ><span class="ml-2">{{
            registerDate | dateFormat: 'effectiveDate'
          }}</span>
        </p>
      </div>
      <div class="col-sm-4">
        <span class="font-weight-bold"><i class="fa fa-calendar"></i></span
        ><span class="ml-2"> {{ endDate | dateFormat: 'effectiveDate' }}</span>
      </div>

      <div class="col-sm-4">
        <span class="font-weight-bold"><i class="fa fa-tag"></i></span
        ><span class="ml-2"> {{ type }} </span>
      </div>
    </div>
  `,
  styleUrls: ['./topic-archive-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicArchiveListItemComponent implements OnInit {
  @Input() type: string;
  @Input() registerDate: string = 'Sep 10, 2019';
  @Input() endDate: string;
  // @Input() issuerName: string;
  @Input() details: string;

  constructor() {}

  ngOnInit() {}
}
