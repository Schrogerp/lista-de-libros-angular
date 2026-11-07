import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  libros = [
    { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez' },
    { titulo: 'Clean Code', autor: 'Robert Martin' }
  ];
}
