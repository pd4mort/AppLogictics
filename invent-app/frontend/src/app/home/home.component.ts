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

  user: UserInterface = {
    name: '',
    email: '',
    password: '',
    role: '',
  };
  isLogged: boolean = false;
  userToken!: Token;

  constructor(private http: HttpClient) { }

  register() {
    const userData = this.user;
    this.http.post('http://localhost:3001/api/v1/auth/register', userData).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito', response);
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }

  login() {
    const credentials = {
      email: this.user.email,
      password: this.user.password
    };
    this.http.post<Token>('http://localhost:3001/api/v1/auth/login', credentials).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso', response);
  
        this.userToken = response
        this.isLogged = true;
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }

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
