import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import {Router} from '@angular/router';

import { EncuestaVerComponent } from './components/encuesta-ver/encuesta-ver.component';
import {EncuestaService} from '../app/service/encuesta.service';
import { EncuestaDetallesComponent } from './components/encuesta-detalles/encuesta-detalles.component'



@NgModule({
  declarations: [
    AppComponent,
    IniciarComponent,
    RegistrarComponent,
    EncuestaComponent,

    EncuestaVerComponent,
     EncuestaDetallesComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [EncuestaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
