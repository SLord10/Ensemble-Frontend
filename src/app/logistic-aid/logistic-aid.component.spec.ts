import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticAidComponent } from './logistic-aid.component';

describe('LogisticAidComponent', () => {
  let component: LogisticAidComponent;
  let fixture: ComponentFixture<LogisticAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticAidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
