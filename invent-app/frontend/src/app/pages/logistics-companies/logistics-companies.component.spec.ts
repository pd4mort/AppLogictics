import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsCompaniesComponent } from './logistics-companies.component';

describe('LogisticsCompaniesComponent', () => {
  let component: LogisticsCompaniesComponent;
  let fixture: ComponentFixture<LogisticsCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticsCompaniesComponent]
    });
    fixture = TestBed.createComponent(LogisticsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
