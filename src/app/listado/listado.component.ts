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

  // recibo los valores del formulario con las variables de plantilla (#)
  agregar(titulo: string, autor: string) {
    if (titulo === '' || autor === '') {
      alert('Completa el titulo y el autor');
      return;
    }

    this.libros.push({ titulo: titulo, autor: autor });
    console.log('libros ahora:', this.libros);
  }
}
