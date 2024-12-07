import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { ItensListaComponent } from './components/itens-lista/itens-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComprasComponent,
    ItensListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
