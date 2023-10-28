import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  panelOpenState = false;

  displayedColumns: string[] = ['name', 'email', 'role'];
  dataSource: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3001/api/v1/users').subscribe((data: any) => {
      const users = data;
      this.dataSource = new UserDataSource(users);
    });
  }
}

class UserDataSource extends DataSource<UserInterface> {
  private _dataStream = new ReplaySubject<UserInterface[]>(1);

  constructor(initialData: UserInterface[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<UserInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: UserInterface[]) {
    this._dataStream.next(data);
  }
}