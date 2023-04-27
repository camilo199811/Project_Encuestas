import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private sessionTimeout: any;
  //llevar el conteo de los intentos fallidos
  private loginAttempts: number = 0;

  constructor(private router: Router) { }

  // Llama esta función para restablecer el temporizador y restablecer el contador de intentos de inicio de sesión
  resetSessionTimeout() {
    clearTimeout(this.sessionTimeout);
    this.startSessionTimeout();
    this.loginAttempts = 0;
  }

  // Inicia un temporizador que llama a la función logout después de 30 minutos
  private startSessionTimeout() {
    this.sessionTimeout = setTimeout(() => {
      this.logout();
    }, 30 *1000);
  }

  // Esta función borra los datos de sesión y redirige al usuario a la página de inicio de sesión
  logout() {
    // Borra los datos de sesión aquí
    swal('Ups!','Tu sesión ha expirado','warning')
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/iniciar']);
  }
  // Esta función verifica las credenciales del usuario y maneja el bloqueo de cuenta
  login(username: string, password: string): boolean {
    // Verifica las credenciales del usuario aquí

    // Si las credenciales son correctas, inicia sesión y restablece el temporizador
    if (username === 'username' && password === 'password') {
      this.resetSessionTimeout();
      return true;
    }
    // Si las credenciales son incorrectas, aumenta el contador de intentos de inicio de sesión
    else {
      this.loginAttempts++;

      // Si el usuario falla en autenticarse 3 veces consecutivas, bloquea la cuenta
      if (this.loginAttempts >= 3) {
        this.lockAccount();
      }

      return false;
    }
  }

  // Esta función bloquea la cuenta del usuario y redirige al usuario a la página de inicio de sesión con un mensaje de bloqueo
  private lockAccount() {
    // Bloquea la cuenta aquí

    // Redirige al usuario a la página de inicio de sesión con un mensaje de bloqueo
    this.router.navigate(['/iniciar'], { queryParams: { locked: true } });
  }

}
