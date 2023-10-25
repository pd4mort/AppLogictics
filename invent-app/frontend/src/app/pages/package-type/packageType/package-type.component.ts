import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { PackageTypeInterface } from 'src/app/interfaces/package-type.interface';

@Component({
  selector: 'app-package-type',
  templateUrl: './package-type.component.html',
  styleUrls: ['./package-type.component.css']
})
export class PackageTypeComponent {

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
    });
  }


  addData() {
    // Lógica para agregar datos aquí
  }

  removeData() {
    // Lógica para eliminar datos aquí
  }

}

class PackageTypeDataSource extends DataSource<PackageTypeInterface> {
  private _dataStream = new ReplaySubject<PackageTypeInterface[]>(1);

  constructor(initialData: PackageTypeInterface[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PackageTypeInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PackageTypeInterface[]) {
    this._dataStream.next(data);
  }
}