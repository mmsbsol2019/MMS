import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselUserConfigComponent } from './vessel-user-config.component';

describe('VesselUserConfigComponent', () => {
  let component: VesselUserConfigComponent;
  let fixture: ComponentFixture<VesselUserConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselUserConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselUserConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
