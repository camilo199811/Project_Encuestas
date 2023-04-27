import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../model/encuesta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/encuesta';

  //obtener empleados
  getEncuesta():Observable<Encuesta[]>{
    return this.http.get<Encuesta[]>(`${this.Url}`);
  }

  //contestar formulario
  createEncuesta(encuesta:Encuesta):Observable<object>{
    return this.http.post<Encuesta>(this.Url,encuesta);
  }

  //obtener respuestas por id
  obtenerEncuestaPorId(id:number):Observable<Encuesta>{
    return this.http.get<Encuesta>(`${this.Url}/${id}`);
  }

  deleteEncuesta(id:number):Observable<object>{
    return this.http.delete(`${this.Url}/${id}`);

  }
}
