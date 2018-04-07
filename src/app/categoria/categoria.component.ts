import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../domain/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

categorias : Categoria[];  // Armazena os contratos do servidor remoto
  constructor(private categoriaService : CategoriasService) { 
   this.getCategorias();
  }
 
   ngOnInit() {
  }

    getCategorias(){
      this.categoriaService.getCategorias()
      .subscribe(response => {
        this.categorias = response;
        console.log(response);
      })
    }


}
