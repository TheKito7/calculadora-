import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from './calculadora/calculadora'; // Importa o componente da calculadora da pasta certa

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Calculadora], // Adicione Calculadora aqui para poder usá-lo no app.html
  templateUrl: './app.html',
  styleUrl: './app.css', // Corrigido para apontar para o css do app, não do componente antigo
})
export class App {
  title = 'projetoangular';
}
