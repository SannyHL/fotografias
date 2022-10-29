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
  ano2020: boolean = false;
  ano2021: boolean = false;
  ano2022: boolean = false;
  escondeMenu:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ativaFotosChaBebe(){
    this.cha = true;
    this.escondeMenu = true;
    this.desativaFotosGestação();
    this.desativaFotosAno2019();
    this.desativaFotosAno2020();
    this.desativaFotosAno2022();
    this.desativaFotosAno2021();
  }
  desativaFotosChaBebe(){
    this.cha = false;
  }

  ativaFotosGestacao(){
    this.gestacao = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosAno2019();
    this.desativaFotosAno2020();
    this.desativaFotosAno2022();
    this.desativaFotosAno2021();
  }
  desativaFotosGestação(){
    this.gestacao = false;
  }
  ativaFotosAno2019(){
    this.ano2019 = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
    this.desativaFotosAno2020();
    this.desativaFotosAno2022();
    this.desativaFotosAno2021();
  }
  desativaFotosAno2019(){
    this.ano2019 = false;
  }
  ativaFotosAno2020(){
    this.ano2020 = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
    this.desativaFotosAno2019();
    this.desativaFotosAno2022();
    this.desativaFotosAno2021();
  }
  desativaFotosAno2020(){
    this.ano2020 = false;
  }
  ativaFotosAno2021(){
    this.ano2021 = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
    this.desativaFotosAno2020();
    this.desativaFotosAno2022();
    this.desativaFotosAno2019();
  }
  desativaFotosAno2021(){
    this.ano2021 = false;
  }
  ativaFotosAno2022(){
    this.ano2022 = true;
    this.escondeMenu = true;
    this.desativaFotosChaBebe();
    this.desativaFotosGestação();
    this.desativaFotosAno2020();
    this.desativaFotosAno2019();
    this.desativaFotosAno2021();
  }
  desativaFotosAno2022(){
    this.ano2022 = false;
  }
}
