import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseManageComponent } from './license-manage.component';

describe('LicenseManageComponent', () => {
  let component: LicenseManageComponent;
  let fixture: ComponentFixture<LicenseManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
