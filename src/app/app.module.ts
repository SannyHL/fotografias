import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosGestacaoComponent } from './fotos-gestacao/fotos-gestacao.component';
import { FotosChaBebeComponent } from './fotos-cha-bebe/fotos-cha-bebe.component';
import { Fotos2019Component } from './fotos2019/fotos2019.component';
import { Fotos2020Component } from './fotos2020/fotos2020.component';
import { Fotos2021Component } from './fotos2021/fotos2021.component';
import { Fotos2022Component } from './fotos2022/fotos2022.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosGestacaoComponent,
    FotosChaBebeComponent,
    Fotos2019Component,
    Fotos2020Component,
    Fotos2021Component,
    Fotos2022Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
