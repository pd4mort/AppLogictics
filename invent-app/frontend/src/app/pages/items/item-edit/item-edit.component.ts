import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemInterface } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent implements OnInit {
  
  editedItem: any = {
    destinationAddress: '',
    postalCode: 0,
    destinationName: '',
    senderName: '',
    itemWeight: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<ItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemInterface,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.editedItem.destinationAddress = this.data.destinationAddress;
    this.editedItem.destinationName = this.data.destinationName;
    this.editedItem.itemWeight = this.data.itemWeight;
    this.editedItem.postalCode = this.data.postalCode;
    this.editedItem.senderName = this.data.senderName;
    this.editedItem.itemWeight = parseFloat(this.editedItem.itemWeight);
  }

  onSave(): void {
    if (this.editedItem) {
      this.http
        .patch<ItemInterface>(
          `http://localhost:3001/api/v1/items/${this.data.id}`,
          this.editedItem
        )
        .subscribe((response: ItemInterface) => {
          this.editedItem = response;
          this.dialogRef.close(this.editedItem);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
