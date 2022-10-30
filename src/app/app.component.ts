import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fotos';

  cha: boolean = false;
  gestacao: boolean = false;
  ano2019: boolean = false;
  escondeMenu:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ativaFotosChaBebe(){
    this.cha = true;
    this.escondeMenu = true;
    this.desativaFotosGestação();
    this.desativaFotosAno2019();
    
  }
  desativaFotosChaBebe(){
    this.cha = false;
  }

  ativaFotosGestacao(){
    this.gestacao = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosAno2019();
  }
  desativaFotosGestação(){
    this.gestacao = false;
  }
  ativaFotosAno2019(){
    this.ano2019 = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
  }
  desativaFotosAno2019(){
    this.ano2019 = false;
  }
  
  voltarParaMenu(){
    this.escondeMenu = false;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
    this.desativaFotosAno2019();
  }
}
