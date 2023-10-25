import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { ItemInterface } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
 
  panelOpenState = false;
  displayedColumns: string[] = ['destinationAddress', 'postalCode', 'destinationName', 'senderName', 'itemWeight'];
  dataSource: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v1/items').subscribe((data: any) => {
      const item = data;
      this.dataSource = new ItemDataSource(item);
    });
  }


  addData() {
    // Lógica para agregar datos aquí
  }

  removeData() {
    // Lógica para eliminar datos aquí
  }

}

class ItemDataSource extends DataSource<ItemInterface> {
  private _dataStream = new ReplaySubject<ItemInterface[]>(1);

  constructor(initialData: ItemInterface[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<ItemInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: ItemInterface[]) {
    this._dataStream.next(data);
  }
}