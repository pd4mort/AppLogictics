import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LogisticsCompaniesInterface } from 'src/app/interfaces/logistics-companies.interface';

@Component({
  selector: 'app-logistics-companies-add',
  templateUrl: './logistics-companies-add.component.html',
  styleUrls: ['./logistics-companies-add.component.css']
})
export class LogisticsCompaniesAddComponent {
  newCompany: any = {
    name: "",
    areaCode: "",
    image: "",
  };

  constructor(
    public dialogRef: MatDialogRef<LogisticsCompaniesAddComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    console.log(this.newCompany)
    if (this.newCompany) {
      this.http
        .post<LogisticsCompaniesInterface>(`http://localhost:3001/api/v1/logistics-companies`, this.newCompany)
        .subscribe((response: LogisticsCompaniesInterface) => {
          
          this.dialogRef.close(response);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
