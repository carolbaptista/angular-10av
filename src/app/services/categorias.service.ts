import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../domain/categoria';

@Injectable()
export class CategoriasService {

  constructor(private http : HttpClient) { }

  getCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://tcc-lojavirtual.herokuapp.com/categorias`)
  }
}
