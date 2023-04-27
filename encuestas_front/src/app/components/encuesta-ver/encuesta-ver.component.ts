import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/model/encuesta';
import { EncuestaService } from 'src/app/service/encuesta.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-encuesta-ver',
  templateUrl: './encuesta-ver.component.html',
  styleUrls: ['./encuesta-ver.component.css']
})
export class EncuestaVerComponent implements OnInit {
  encuestas:Encuesta[];

  constructor(private service:EncuestaService,private router:Router){

  }
  ngOnInit(): void {
   this.obtenerEncuesta()
  }

//Obtener los datos de la encuesta
  private obtenerEncuesta(){
    this.service.getEncuesta().subscribe(dato=>{
      this.encuestas=dato;
    })
  }

  //Navegar a la pagina de encuesta
  contestar(){
    this.router.navigate(["/encuesta"])
  }

//ver detalles de la respuesta
verDetalles(id:number){
  this.router.navigate(['/detalles',id])
}

//Eliminar datos de la encuesta
  delete(id:number){


    swal({
      title:'Confirmar',
      text:'Enviar respuestas',
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si,enviar',
      cancelButtonText:'Cancelar',
      confirmButtonClass:'btn btn-warning',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:true
    }).then((result)=>{
      if(result.value){
        this.service.deleteEncuesta(id).subscribe(dato=>{
          console.log(dato);
          this.obtenerEncuesta();
          swal('Confirmado','Respuesta eliminada','success')
      })

      }
    })


  }



}
