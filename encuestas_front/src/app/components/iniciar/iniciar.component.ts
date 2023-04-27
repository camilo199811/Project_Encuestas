import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginUserService } from 'src/app/service/login-user.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  template: ` <h1>Iniciar sesión</h1>
  <div *ngIf="locked">
    Su cuenta ha sido bloqueada debido a intentos de inicio de sesión fallidos. Por favor, inténtelo de nuevo más tarde.
  </div>
  <div>
      <input type="text" [(ngModel)]="username" placeholder="Usuario" />
  </div>
  `,
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit{

  user:Usuario=new Usuario();


  constructor(private userService:LoginUserService, private router:Router){}
  ngOnInit(): void {

  }

  userLogin(){
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(data=>{

      this.router.navigate(['/encuesta']);
    },
    error=>swal('Ups!','Credenciales incorrectas','warning')
    );
  }

}
