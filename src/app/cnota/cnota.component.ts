import { Component } from '@angular/core';

@Component({
  selector: 'app-cnota',
  templateUrl: './cnota.component.html',
  styleUrl: './cnota.component.css'
})
export class CnotaComponent {
  nombre: string;
  edad: number;
  promedio: number;
  notas2: number[];
  suma: number;

  nota: number;

  valor:number;
  constructor(){
    this.nota = 5

    this.nombre = "Julian Reyes"
    this.edad = 45
    this.notas2 = [5,1,2,4.1,1];
    this.suma = this.notas2.reduce((acumulador, valorActual)=> acumulador+valorActual,0)
    this.promedio = (this.suma/this.notas2.length)

    this.valor = 0;
  }
}
