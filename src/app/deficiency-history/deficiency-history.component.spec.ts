import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyHistoryComponent } from './deficiency-history.component';

describe('DeficiencyHistoryComponent', () => {
  let component: DeficiencyHistoryComponent;
  let fixture: ComponentFixture<DeficiencyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
