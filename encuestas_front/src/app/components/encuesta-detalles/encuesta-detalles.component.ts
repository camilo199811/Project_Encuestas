import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Encuesta } from 'src/app/model/encuesta';
import { EncuestaService } from 'src/app/service/encuesta.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-encuesta-detalles',
  templateUrl: './encuesta-detalles.component.html',
  styleUrls: ['./encuesta-detalles.component.css']
})
export class EncuestaDetallesComponent implements OnInit{

  id:number;
  encuesta:Encuesta;
  constructor(private route:ActivatedRoute,private encuestaService:EncuestaService){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.encuesta=new Encuesta();
    this.encuestaService.obtenerEncuestaPorId(this.id).subscribe(dato=>{
      this.encuesta=dato;
      swal(`Detalles encuesta de ${this.encuesta.email}`);
    })
  }

}
