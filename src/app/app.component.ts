import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Schroger';
  descripcion = 'Mi primera aplicación en Angular. Es una lista de los libros que quiero leer este año.';
}
