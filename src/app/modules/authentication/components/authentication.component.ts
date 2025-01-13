import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  standalone: true
})
export class AuthenticationComponent {
  isActive = false;

  login = {
    username: '',
    password: ''
  };

  register = {
    username: '',
    email: '',
    password: ''
  };

  toggleForm(formType: string) {
    if (formType === 'register') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  onLoginSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log('Login Form Submitted:', this.login);
    }
  }

  onRegisterSubmit(registerForm: any) {
    if (registerForm.valid) {
      console.log('Register Form Submitted:', this.register);
    }
  }
}
