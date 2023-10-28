import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsCompaniesAddComponent } from './logistics-companies-add.component';

describe('LogisticsCompaniesAddComponent', () => {
  let component: LogisticsCompaniesAddComponent;
  let fixture: ComponentFixture<LogisticsCompaniesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticsCompaniesAddComponent]
    });
    fixture = TestBed.createComponent(LogisticsCompaniesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
