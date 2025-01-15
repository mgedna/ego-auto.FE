import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpRequest } from '../Entities/SignUpRequest';
import { LogInRequest } from '../Entities/LogInRequest';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ErrorResponse } from '../../../core/Entities/ErrorResponse';
import { AuthenticationResponse } from '../Entities/AuthenticationResponse';
import { TokenUtility } from '../../../core/helper/JwtHelper';
import { NgIf } from '@angular/common';
import StorageHelper from '../../../core/helper/StorageHelper';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf]
})
export class AuthenticationComponent {
  isActive = false;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  toggleForm(formType: string) {
    this.isActive = formType === 'register';
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const loginData: LogInRequest = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      };

      this.authService.login(loginData).subscribe({
        next: (response: AuthenticationResponse) => {
          StorageHelper.SetToken(response.Token);
          StorageHelper.SetUser(TokenUtility.DecodeToken(response.Token));
          Swal.fire({
            title: 'Da bravo!',
            text: 'All good, mate! Hai sa vezi niste masini',
            icon: 'success',
            confirmButtonText: 'Hai'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/vehicles';
            }
          });
        },
        error: (err : ErrorResponse) => {
            Swal.fire({
              title: 'Naspa chat!',
              text: 'A aparut o problema prietene.. Uite asta: ' + err,
              icon: 'error'
          });
        }
      });
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const registerData: SignUpRequest = {
        AccountName: this.registerForm.value.accountName,
        Email: this.registerForm.value.email,
        Password: this.registerForm.value.password,
        Role: this.registerForm.value.role
      };

      this.authService.signup(registerData).subscribe({
        next: (response: AuthenticationResponse) => {
          Swal.fire({
            title: 'Da bravo!',
            text: 'All good mate! Hai sa vezi niste masini',
            icon: 'success',
            confirmButtonText: 'Hai'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/vehhicles';
            }
          });
        },
        error: (err: ErrorResponse) => {
          Swal.fire({
                      title: 'Naspa chat!',
                      text: 'A aparut o problema prietene.. Uite asta: ' + err,
                      icon: 'error'
                  });
        }
      });
    }
  }
}
