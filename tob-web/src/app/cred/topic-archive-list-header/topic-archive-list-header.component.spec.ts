import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicArchiveListHeaderComponent } from './topic-archive-list-header.component';

describe('TopicArchiveListHeaderComponent', () => {
  let component: TopicArchiveListHeaderComponent;
  let fixture: ComponentFixture<TopicArchiveListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicArchiveListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicArchiveListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
