import { Injectable, OnInit } from '@angular/core';
import StorageHelper from '../../../core/helper/StorageHelper';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ceva')
    StorageHelper.SetUsername();
    StorageHelper.SetUserId();
    StorageHelper.SetRole();
  }
}
