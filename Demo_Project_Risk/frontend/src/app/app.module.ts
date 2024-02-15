import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemNameComponent } from './components/item-name/item-name.component';
import {MatTableModule} from '@angular/material/table';
import { TableDisplayComponent } from './components/table-display/table-display.component'
import {DragDropModule} from '@angular/cdk/drag-drop';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';


import {Sort, MatSortModule} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table'

import {MatIconModule} from '@angular/material/icon'


import { HttpClientModule } from '@angular/common/http';


// import {MaterialModule} from './material/material.module'
 
@NgModule({
  declarations: [
    AppComponent,
    ItemNameComponent,
    TableDisplayComponent,
  ],
  imports: [

   
    
   

    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
      
    A11yModule,
    CdkTreeModule,
    CdkTableModule,
    ScrollingModule,
  
    DragDropModule,
    MatSortModule,
    MatIconModule,

    HttpClientModule,


    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
