import { TransmitirDadosService } from './../transmitir-dados.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Anuncio } from 'src/anuncio';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  anuncio: Anuncio[] = [];
  isEditing: boolean = false;
  formGroupAnuncio: FormGroup;
  submitted: boolean = false;
  constructor(private AnuncioService: AnuncioService,
    private formBuilder: FormBuilder,
    private TransmitirDadosService: TransmitirDadosService

  ) {
    this.formGroupAnuncio = formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      data: ['', [Validators.required]],
      imagem: ['', [Validators.required]],
      status: [false]
    });
  }
  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.AnuncioService.getAnuncios().subscribe({
      next: data => this.anuncio = data
    });
  }

  save() {
    this.submitted = true;
    if (this.formGroupAnuncio.valid) {
      if (this.isEditing) {
        this.AnuncioService.update(this.formGroupAnuncio.value).subscribe(
          {
            next: () => {
              this.loadAnuncio();
              this.formGroupAnuncio.reset();
              this.isEditing = false;
              this.submitted = false;
            }
          }
        );
      }
      else {
        this.AnuncioService.save(this.formGroupAnuncio.value).subscribe(
          {
            next: data => {
              this.TransmitirDadosService.setAnuncioData(this.anuncio);
              this.anuncio.push(data)
              this.formGroupAnuncio.reset();
              this.submitted = false;
            }
          }
        );
      }
    }
  }

  edit(anuncio: Anuncio) {
    this.formGroupAnuncio.setValue(anuncio);
    this.isEditing = true;
  }

  delete(anuncio: Anuncio) {
    this.AnuncioService.delete(anuncio).subscribe(
      {
        next: () => this.loadAnuncio()
      }
    );
  }
  limparDados() {
    this.formGroupAnuncio.reset();
    this.submitted = false;
  }

  get title(): any {
    return this.formGroupAnuncio.get("titulo");
  }
  get price(): any {
    return this.formGroupAnuncio.get("preco");
  }
  get description(): any {
    return this.formGroupAnuncio.get("descricao");
  }
  get data(): any {
    return this.formGroupAnuncio.get("data");
  }
  get image(): any {
    return this.formGroupAnuncio.get("imagem");
  }
}
