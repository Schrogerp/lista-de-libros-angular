import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  // con @HostBinding le agrego clases de bootstrap al elemento <app-tarjeta>
  @HostBinding('class.card') esTarjeta = true;
  @HostBinding('class.mb-3') margenAbajo = true;
}
