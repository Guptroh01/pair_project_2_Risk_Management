// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTable } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';

// MatTableDataSourcePaginator,


const MaterialUI = [
  NgModule,
  CommonModule,

  MatTable,
  



];


@NgModule({
  
  imports: [
    ...MaterialUI
  ],

  
  exports:[...MaterialUI]
})
export class MaterialModule { }
