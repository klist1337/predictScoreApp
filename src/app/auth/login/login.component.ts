import { Component } from '@angular/core';
import 'boxicons';
import 'animate.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onClick() {
   this.router.navigate(['/auth/signup']);
  }
}