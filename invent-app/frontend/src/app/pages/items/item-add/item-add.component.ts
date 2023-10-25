import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemInterface } from 'src/app/interfaces/item.interface';

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
  };

  constructor(
    public dialogRef: MatDialogRef<ItemAddComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    if (this.newItem) {
      this.http
        .post<ItemInterface>(`http://localhost:3000/api/v1/items`, this.newItem)
        .subscribe((response: ItemInterface) => {
          
          this.dialogRef.close(response);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
