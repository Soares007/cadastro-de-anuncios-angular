import { Component } from '@angular/core';
import { Anuncio } from 'src/anuncio';
import { AnuncioService } from '../anuncio.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anuncio: Anuncio[] = [];
  constructor(private AnuncioService: AnuncioService
  ) {}


  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.AnuncioService.getAnuncios().subscribe({
      next: data => this.anuncio = data
    });
  }
  }
