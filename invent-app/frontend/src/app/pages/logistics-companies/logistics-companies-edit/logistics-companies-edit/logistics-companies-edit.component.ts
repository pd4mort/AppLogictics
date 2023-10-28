import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LogisticsCompaniesInterface } from 'src/app/interfaces/logistics-companies.interface';

@Component({
  selector: 'app-logistics-companies-edit',
  templateUrl: './logistics-companies-edit.component.html',
  styleUrls: ['./logistics-companies-edit.component.css']
})
export class LogisticsCompaniesEditComponent {
  editedComapny: any = {
    name: '',
    areaCode: 0,
    image: '',
  };

  constructor(
    public dialogRef: MatDialogRef<LogisticsCompaniesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LogisticsCompaniesInterface,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.editedComapny.name = this.data.name;
    this.editedComapny.areaCode = this.data.areaCode;
    this.editedComapny.image = this.data.image;
    
  }

  onSave(): void {
    if (this.editedComapny) {
      this.http
        .patch<LogisticsCompaniesInterface>(
          `http://localhost:3001/api/v1/logistics-companies/${this.data.id}`,
          this.editedComapny
        )
        .subscribe((response: LogisticsCompaniesInterface) => {
          this.editedComapny = response;
          this.dialogRef.close(this.editedComapny);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
