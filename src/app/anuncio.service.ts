import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from 'src/anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  url = "http://localhost:3000/anuncios";
  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.url);
  }

  save(anuncio: Anuncio): Observable<Anuncio>{
  return this.http.post<Anuncio>(this.url, anuncio);
  }

  update(anuncio: Anuncio): Observable<Anuncio>{
    return this.http.put<Anuncio>(`${this.url}/${anuncio.id}`, anuncio);
    }

  delete(anuncio: Anuncio): Observable<void>{
    return this.http.delete<void>(`${this.url}/${anuncio.id}`);
    }
}
