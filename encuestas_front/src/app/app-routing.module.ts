import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { EncuestaVerComponent } from './components/encuesta-ver/encuesta-ver.component';
import { EncuestaDetallesComponent } from './components/encuesta-detalles/encuesta-detalles.component';


const routes: Routes = [
  {path:'iniciar',component:IniciarComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'encuesta',component:EncuestaComponent},
  {path:'listar',component:EncuestaVerComponent},
  {path:'detalles/:id',component:EncuestaDetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
