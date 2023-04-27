import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginUserService } from 'src/app/service/login-user.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  modelUsuario=new Usuario();
  constructor(private router:Router,private service:LoginUserService){

  }
  ngOnInit(): void {

  }

  listar(){}
  //Añadir usuario
  add(){

    swal({
      title:'Confirmar',
      text:'Crear usuario',
      type:'success',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si,enviar',
      cancelButtonText:'Cancelar',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:true
    }).then((result)=>{
      if(result.value){  this.service.createUsuario(this.modelUsuario)
        .subscribe(data=>{

          this.router.navigate(["/iniciar"]),
          swal('Confirmado','Registro exitoso','success')
        });}
    })




}
}

