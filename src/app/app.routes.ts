import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { ItensListaComponent } from './components/itens-lista/itens-lista.component';

const routes: Routes = [
  { path: '', component: ListaComprasComponent },
  { path: 'itens/:id', component: ItensListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
