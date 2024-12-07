import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-itens-lista',
  templateUrl: './itens-lista.component.html',
  styleUrls: ['./itens-lista.component.css'],
})
export class ItensListaComponent implements OnInit {
  @Input() listId: string = '';
  itens: any[] = [];
  novoItem: string = '';
  quantidade: number = 1;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.carregarItens();
  }

  isItemInvalid(): boolean {
    return (
      !this.novoItem.trim() ||
      /^\d+$/.test(this.novoItem.trim())
    );
  }

  carregarItens() {
    if (this.listId) {
      this.itemService.getItemsByList(this.listId).subscribe((data) => {
        this.itens = data;
      });
    }
  }

  adicionarItem() {
    const nomeValido = this.novoItem.trim() && !/^\d+$/.test(this.novoItem.trim());
    const quantidadeValida = this.quantidade > 0;

    if (!nomeValido) {
      alert('O nome do item não pode estar vazio ou conter apenas números.');
      return;
    }

    if (!quantidadeValida) {
      alert('A quantidade deve ser maior que 0.');
      return;
    }

    this.itemService
      .createItem({
        name: this.novoItem.trim(),
        quantity: this.quantidade,
        status: 'pendente',
        listId: this.listId,
      })
      .subscribe(() => {
        this.carregarItens();
        this.novoItem = '';
        this.quantidade = 1;
      });
  }

  alterarStatus(item: any) {
    const novoStatus = item.status === 'pendente' ? 'comprado' : 'pendente';
    this.itemService.updateItemStatus(item._id, novoStatus).subscribe(() => {
      this.carregarItens();
    });
  }
}
