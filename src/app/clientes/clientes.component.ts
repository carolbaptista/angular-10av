import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../domain/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clientesService: ClientesService) {
    this.getClientes();
  }
  ngOnInit() {
  }

  getClientes() {
    this.clientesService.getClientes()
      .subscribe(response => {
        this.clientes = response;
        console.log(response);

      })

  }
}



