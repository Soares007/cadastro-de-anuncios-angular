import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Anuncio } from 'src/anuncio';

@Injectable({
  providedIn: 'root'
})
export class TransmitirDadosService {
  private anuncioData: BehaviorSubject<Anuncio[]> = new BehaviorSubject<Anuncio[]>([]);

  constructor() { }

  setAnuncioData(data: Anuncio[]): void {
    this.anuncioData.next(data);
  }

  getAnuncioData(): Observable<Anuncio[]> {
    return this.anuncioData.asObservable();
  }
}
