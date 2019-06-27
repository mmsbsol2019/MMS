import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencySearchComponent } from './deficiency-search.component';

describe('DeficiencySearchComponent', () => {
  let component: DeficiencySearchComponent;
  let fixture: ComponentFixture<DeficiencySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
