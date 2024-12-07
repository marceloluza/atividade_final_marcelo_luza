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

  carregarItens() {
    if (this.listId) {
      this.itemService.getItemsByList(this.listId).subscribe((data) => {
        this.itens = data;
      });
    }
  }

  adicionarItem() {
    if (this.novoItem.trim() && this.quantidade > 0) {
      this.itemService.createItem({
        name: this.novoItem,
        quantity: this.quantidade,
        listId: this.listId,
      }).subscribe(() => {
        this.carregarItens();
        this.novoItem = '';
        this.quantidade = 1;
      });
    } else {
      alert('A quantidade deve ser maior que 0');
    }
  }

  alterarStatus(item: any) {
    const novoStatus = item.status === 'pending' ? 'purchased' : 'pending';
    this.itemService.updateItemStatus(item._id, novoStatus).subscribe(() => {
      this.carregarItens();
    });
  }
}
