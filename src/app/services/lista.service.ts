import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private baseUrl = 'http://localhost:3000/api/lists'; // Altere conforme sua API

  constructor(private http: HttpClient) {}

  getListas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createLista(lista: any): Observable<any> {
    console.log('enviando dados', lista);
    return this.http.post(`${this.baseUrl}`, lista);
  }

  deleteLista(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
