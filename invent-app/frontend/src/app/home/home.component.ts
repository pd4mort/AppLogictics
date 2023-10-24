import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { PackageType } from '../interfaces/package-type.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  //packageType: PackageType[] = [];
  displayedColumns: string[] = ['typeName', 'weight', 'form'];
  dataSource: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Realiza una solicitud a tu API aquí
    this.http.get('http://localhost:3000/api/v1/package-type').subscribe((data: any) => {
      const packageType = data;
      this.dataSource = new PackageTypeDataSource(packageType);
      console.log(packageType);
    });
  }


  addData() {
    // Lógica para agregar datos aquí
  }

  removeData() {
    // Lógica para eliminar datos aquí
  }

}

class PackageTypeDataSource extends DataSource<PackageType> {
  private _dataStream = new ReplaySubject<PackageType[]>(1);

  constructor(initialData: PackageType[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PackageType[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PackageType[]) {
    this._dataStream.next(data);
  }
}
