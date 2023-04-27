import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/model/encuesta';
import { EncuestaService } from 'src/app/service/encuesta.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {



  modelEncuesta=new Encuesta();
  constructor(private router:Router,private service:EncuestaService){

  }

  //Navegar a la pagina de listar
  listar(){
    this.router.navigate(["/listar"])
  }
  //Navegar a la pagina de encuesta
  guardar(){
    this.router.navigate(["/encuesta"])
  }

  //Añadir respuesta
  add(){

      swal({
        title:'Confirmar',
        text:'Enviar respuestas',
        type:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Si,enviar',
        cancelButtonText:'Cancelar',
        confirmButtonClass:'btn btn-success',
        cancelButtonClass:'btn btn-danger',
        buttonsStyling:true
      }).then((result)=>{
        if(result.value){  this.service.createEncuesta(this.modelEncuesta)
          .subscribe(data=>{

            this.router.navigate(["/listar"])
          });}
      })




  }


}
