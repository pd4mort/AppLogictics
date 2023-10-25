import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ReplaySubject, Observable } from 'rxjs';
import { LogisticsCompaniesInterface } from 'src/app/interfaces/logistics-companies.interface';


@Component({
  selector: 'app-logistics-companies',
  templateUrl: './logistics-companies.component.html',
  styleUrls: ['./logistics-companies.component.css']
})
export class LogisticsCompaniesComponent {

  panelOpenState = false;

  displayedColumns: string[] = ['name', 'areaCode', 'image'];
  dataSource: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.http.get('http://localhost:3000/api/v1/logistics-companies').subscribe((data: any) => {
      const logisticsCompanies = data;
      this.dataSource = new LogisticsCompaniesDataSource(logisticsCompanies);

    });
  }

  getImgHtml(imageUrl: string): SafeHtml {
    const imgHtml = `<img src="${imageUrl}" alt="Imagen" width="100" height="100">`;
    return this.sanitizer.bypassSecurityTrustHtml(imgHtml);
  }


  addData() {
    // Lógica para agregar datos aquí
  }

  removeData() {
    // Lógica para eliminar datos aquí
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