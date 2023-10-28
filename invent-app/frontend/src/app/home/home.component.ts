import { Component } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Token } from '../interfaces/token.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  // User object for registration and login
  user: UserInterface = {
    name: '',
    email: '',
    password: '',
    role: '',
  };
  isLogged: boolean = false; // Tracks if the user is logged in
  userToken!: Token; // Stores the user's authentication token

  constructor(private http: HttpClient) { }

  // Register
  register() {
    const userData = this.user;
    this.http.post('http://localhost:3001/api/v1/auth/register', userData).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }

  // Login
  login() {
    const credentials = {
      email: this.user.email,
      password: this.user.password
    };
    this.http.post<Token>('http://localhost:3001/api/v1/auth/login', credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
  
        this.userToken = response;
        this.isLogged = true;
      },
      (error) => {
        console.error('Error logging in', error);
      }
    );
  }

  // Logout
  logout() {
    this.userToken.token = '';
    this.isLogged = false;
    this.user = {
      name: '',
      email: '',
      password: '',
      role: '',
    };
  }
}
