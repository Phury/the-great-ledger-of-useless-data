import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityPageComponent } from './create-activity-page.component';

describe('CreateActivityPageComponent', () => {
  let component: CreateActivityPageComponent;
  let fixture: ComponentFixture<CreateActivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateActivityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
