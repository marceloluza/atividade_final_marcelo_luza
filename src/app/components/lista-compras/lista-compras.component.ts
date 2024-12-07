import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent implements OnInit {
  listas: any[] = [];
  novaLista: string = '';

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.carregarListas();
  }

  carregarListas() {
    this.listaService.getListas().subscribe((data) => {
      this.listas = data;
    });
  }

  adicionarLista() {
    if (this.novaLista.trim()) {
      const novaLista = { name: this.novaLista };
      this.listaService.createLista(novaLista).subscribe(() => {
        this.carregarListas();
        this.novaLista = '';
      });
    }
  }

  removerLista(id: string) {
    this.listaService.deleteLista(id).subscribe(() => {
      this.carregarListas();
    });
  }
}
