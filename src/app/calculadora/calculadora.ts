import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  // Adicione a função somar que estava faltando!
  somar() {
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    this.resultado = this.numero1 / this.numero2;
  }
}
