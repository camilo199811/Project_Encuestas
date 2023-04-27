import { Component } from '@angular/core';
import { AuthServiceService } from './service/aut-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encuestas';
  constructor(private authService: AuthServiceService) {
    // Restablece el temporizador en el inicio de la aplicación
    this.authService.resetSessionTimeout();

    // Restablece el temporizador en el evento mousemove
    window.addEventListener('mousemove', () => {
      this.authService.resetSessionTimeout();
    });
  }
}
