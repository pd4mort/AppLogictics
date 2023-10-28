import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ReplaySubject, Observable } from 'rxjs';
import { LogisticsCompaniesInterface } from 'src/app/interfaces/logistics-companies.interface';
import { LogisticsCompaniesEditComponent } from './logistics-companies-edit/logistics-companies-edit/logistics-companies-edit.component';
import { LogisticsCompaniesAddComponent } from './logistics-companies-add/logistics-companies-add/logistics-companies-add.component';


@Component({
  selector: 'app-logistics-companies',
  templateUrl: './logistics-companies.component.html',
  styleUrls: ['./logistics-companies.component.css']
})
export class LogisticsCompaniesComponent {

  panelOpenState = false;
  logisticsCompanies: any;

  displayedColumns: string[] = ['name', 'areaCode', 'image', 'actions'];
  dataSource: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private dialog: MatDialog) {}

  ngOnInit(): void {

    this.http.get('http://localhost:3001/api/v1/logistics-companies').subscribe((data: any) => {
      this.logisticsCompanies = data;
      this.dataSource = new LogisticsCompaniesDataSource(this.logisticsCompanies);

    });
  }

  getImgHtml(imageUrl: string): SafeHtml {
    const imgHtml = `<img src="${imageUrl}" alt="Imagen" width="100" height="100">`;
    return this.sanitizer.bypassSecurityTrustHtml(imgHtml);
  }


  openEditDialog(company: LogisticsCompaniesInterface): void {
    const dialogRef = this.dialog.open(LogisticsCompaniesEditComponent, {
      data: company, 
    });

    dialogRef.afterClosed().subscribe((result: LogisticsCompaniesInterface) => {
      if (result) {
  
        const index = this.logisticsCompanies.findIndex((i: { id: number }) => i.id === result.id);
  
        if (index !== -1) {
          this.logisticsCompanies[index] = result;
          this.dataSource.setData([...this.logisticsCompanies]);
        }
      }
    });
  }

  deleteItem(company: LogisticsCompaniesInterface) {
    console.log('Borrar', company);

    this.http
      .delete(`http://localhost:3001/api/v1/logistics-companies/${company.id}`)
      .subscribe((response) => {
        console.log('Elemento eliminado:', response);

        this.logisticsCompanies = this.logisticsCompanies.filter((i: { id: number }) => i.id !== company.id);
        this.dataSource.setData(this.logisticsCompanies);
      });
  }

  addItem() {

    console.log('Añadir');
  
    const dialogRef = this.dialog.open(LogisticsCompaniesAddComponent, {
       
    });
  
    dialogRef.afterClosed().subscribe((result: LogisticsCompaniesInterface) => {
      console.log(result);
      if (result) {
        this.logisticsCompanies.push(result);
        this.dataSource.setData(this.logisticsCompanies);
      }
    });
  }
}

class LogisticsCompaniesDataSource extends DataSource<LogisticsCompaniesInterface> {
  private _dataStream = new ReplaySubject<LogisticsCompaniesInterface[]>(1);

  constructor(initialData: LogisticsCompaniesInterface[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<LogisticsCompaniesInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: LogisticsCompaniesInterface[]) {
    this._dataStream.next(data);
  }
}