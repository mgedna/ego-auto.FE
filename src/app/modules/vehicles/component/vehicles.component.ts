import { Component, OnInit } from '@angular/core';
import { GridComponent } from "../../../shared/components/grid/grid.component";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  imports: [GridComponent]
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data: any[] = [];
  columns = [
    { field: 'id', headerName: 'Id masina' },
    { field: 'make', headerName: 'Marca' },
    { field: 'model', headerName: 'Model' },
    { field: 'Year', headerName: 'An fabricatie' },
    { field: 'pricePerDay', headerName: 'pret per zi' },
    { field: 'status', headerName: 'Status masina' },
    { field: 'description', headerName: 'Descriere' }
  ];

  totalPages = 10;
  currentPage = 1;
  pageSize = 10;

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchVehicles();
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.fetchVehicles();
  }

  fetchVehicles(): void {

  }
}
