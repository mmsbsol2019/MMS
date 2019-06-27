import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyCreateComponent } from './deficiency-create.component';

describe('DeficiencyCreateComponent', () => {
  let component: DeficiencyCreateComponent;
  let fixture: ComponentFixture<DeficiencyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
