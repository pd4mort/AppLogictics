import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { of, switchMap } from 'rxjs';
import { ItemInterface } from 'src/app/interfaces/item.interface';
import { LogisticsCompaniesInterface } from 'src/app/interfaces/logistics-companies.interface';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
})
export class ItemAddComponent implements OnInit {
  newItem: any = {
    destinationAddress: '',
    postalCode: 0,
    destinationName: '',
    senderName: '',
    itemWeight: 0,
    company: '',
    price: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<ItemAddComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    if (this.newItem) {
      // First, we execute selectCompany and then the POST request
      this.selectCompany(this.newItem.postalCode).pipe(
        switchMap(newItem => {
          newItem.price = this.calculatePackagePrice(newItem.itemWeight);
          return this.http.post<ItemInterface>(`http://localhost:3000/api/v1/items`, newItem);
        })
      ).subscribe((response: ItemInterface) => {
        this.dialogRef.close(response);
      });
    }
  }


  onCancel(): void {
    this.dialogRef.close();
  }

  /**
   * @param postalCode
   * @returns Observable newItem for selectedCompany
   */
  selectCompany(postalCode: number) {
    return this.http.get('http://localhost:3000/api/v1/logistics-companies').pipe(
      switchMap((data: any) => {
        const logisticsCompanies = data as LogisticsCompaniesInterface[];
        const postalCodePrefix = Math.floor(postalCode / 1000);
        const selectedCompany = logisticsCompanies.find(company => company.areaCode === postalCodePrefix);
    
        if (selectedCompany) {
          const companyName = selectedCompany.name;
          console.log('Nombre de la compañía para el código postal', companyName);
          this.newItem.company = companyName;
        } else {
          this.newItem.company = 'INVENT';
        }

        return of(this.newItem);
      })
    );
  }


  /**
   * Calculate the package price based on the weight
   * @param weight Weight of the package in kg
   * @returns Calculated price
   */
  calculatePackagePrice(weight: number): number {
    if (weight > 0 && weight <= 0.1) {
      return weight * 5;
    } else if (weight > 0.1 && weight <= 0.3) {
      return weight * 5 + 1;
    } else if (weight > 0.3 && weight <= 5) {
      return weight * 10;
    } else if (weight > 5 && weight <= 10) {
      return weight * 5 + weight + 75;
    } else if (weight > 10) {
      return (weight - 10) * 7.5 + 130 + weight;
    } else {
      return 0;
    }
  }
}
