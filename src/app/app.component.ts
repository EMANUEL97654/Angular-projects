import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion de Calculadora';
  numero1: number;
  numero2: number;
  resultado: number;

  constructor() {

  }

  onResultado() {
    this.resultado = this.numero1 + this.numero2;
  }


}
