import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './components/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    AuthenticationComponent,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule {}
