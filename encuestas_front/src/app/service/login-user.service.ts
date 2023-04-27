import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {


  private baseUrl="http://localhost:8080/api/registrar/login";
  Url='http://localhost:8080/api/registrar/';
  constructor(private httpClient:HttpClient) { }

  loginUser(user:Usuario):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }

  createUsuario(usuario:Usuario):Observable<object>{
    return this.httpClient.post<Usuario>(this.Url,usuario);
  }
}


