import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsCompaniesEditComponent } from './logistics-companies-edit.component';

describe('LogisticsCompaniesEditComponent', () => {
  let component: LogisticsCompaniesEditComponent;
  let fixture: ComponentFixture<LogisticsCompaniesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticsCompaniesEditComponent]
    });
    fixture = TestBed.createComponent(LogisticsCompaniesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
