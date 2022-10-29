import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosGestacaoComponent } from './fotos-gestacao/fotos-gestacao.component';
import { FotosChaBebeComponent } from './fotos-cha-bebe/fotos-cha-bebe.component';
import { Fotos2019Component } from './fotos2019/fotos2019.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosGestacaoComponent,
    FotosChaBebeComponent,
    Fotos2019Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
