import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Lista de Compras</h1>
      <app-lista-compras></app-lista-compras>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
    `,
  ],
})
export class AppComponent {}
