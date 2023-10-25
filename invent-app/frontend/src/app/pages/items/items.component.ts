import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { ItemInterface } from 'src/app/interfaces/item.interface';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemAddComponent } from './item-add/item-add.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  elementAdd: any;
  items: any;

  panelOpenState = false;
  displayedColumns: string[] = [
    'destinationAddress',
    'postalCode',
    'destinationName',
    'senderName',
    'itemWeight',
    'actions',
  ];
  dataSource: any;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/api/v1/items')
      .subscribe((data: any) => {
        this.items = data;
        this.dataSource = new ItemDataSource(this.items);
      });
  }

  openEditDialog(item: ItemInterface): void {
    const dialogRef = this.dialog.open(ItemEditComponent, {
      data: item, 
    });

    dialogRef.afterClosed().subscribe((result: ItemInterface) => {
      if (result) {
  
        const index = this.items.findIndex((i: { id: number }) => i.id === result.id);
  
        if (index !== -1) {
          this.items[index] = result;
          this.dataSource.setData([...this.items]);
        }
      }
    });
  }

  deleteItem(item: ItemInterface) {
    console.log('Borrar', item);

    this.http
      .delete(`http://localhost:3000/api/v1/items/${item.id}`)
      .subscribe((response) => {
        console.log('Elemento eliminado:', response);

        this.items = this.items.filter((i: { id: number }) => i.id !== item.id);
        this.dataSource.setData(this.items);
      });
  }

  addItem() {

    console.log('Añadir');
  
    const dialogRef = this.dialog.open(ItemAddComponent, {
       
    });
  
    dialogRef.afterClosed().subscribe((result: ItemInterface) => {
      console.log(result);
      if (result) {
        this.items.push(result);
        this.dataSource.setData(this.items);
      }
    });
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
