import { HomeButtonTypes } from './../../../core/Entities/Constants/HomeButtonTypes.enum';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import StorageHelper from '../../../core/helper/StorageHelper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[CommonModule, RouterModule],
  standalone: true
})
export class HomeComponent implements OnInit{
  @ViewChildren('authButton, vehiclesButton, profileButton') buttons!: QueryList<any>;

  rotation: number = 15;
  engineActiveAuth: boolean = false;
  engineActiveProfile: boolean = false;
  engineActiveVehicles: boolean = false;
  wrapperTransform: string = `rotateX(${this.rotation}deg) translateY(-110px)`; // Transformarea inițială a wrapper-ului

  isAuthenticated = false;
  constructor(private router: Router) {}

  ngOnInit(): void{
    this.isAuthenticated = !!StorageHelper.getToken()
  }

  toggleEngine(data: HomeButtonTypes): void {
    if(data === HomeButtonTypes.Vehicles)
    {
      this.engineActiveVehicles = !this.engineActiveVehicles;
      setTimeout(() => {
        this.router.navigate(['/vehicles']);
      }, 800);
    }
    else if(data === HomeButtonTypes.Authentication)
    {
      this.engineActiveAuth = !this.engineActiveAuth;
      setTimeout(() => {
        this.router.navigate(['/authentication']);
      }, 800);
    }
    else if(data === HomeButtonTypes.Profile)
    {
      if (!this.isAuthenticated) {
        Swal.fire({
            title: 'Nu poti sa-ti vezi profilul daca nu esti autentificat prietene...',
            text: 'Hai sa-ti faci un cont/autentifici cu contul:',
            icon: 'warning',
            confirmButtonText: 'Spre autentificare'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/authentication';
            }
        });

        return;
      } else {
          this.engineActiveProfile = !this.engineActiveProfile;
      }
    }
  }
}
