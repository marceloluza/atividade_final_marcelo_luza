import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItemsByList(listId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${listId}`);
  }

  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  updateItemStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status });
  }
}
