import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile.component';



@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileComponent
  ]
})
export class ProfileModule { }
