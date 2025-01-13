import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './component/vehicles.component';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    VehiclesComponent,
  ]
})
export class VehiclesModule { }
