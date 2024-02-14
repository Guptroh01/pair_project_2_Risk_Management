import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemNameComponent } from './components/item-name/item-name.component';
import {MatTableModule} from '@angular/material/table';
import { TableDisplayComponent } from './components/table-display/table-display.component'
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


import {Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'

 
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
    CdkDrag,
    CdkDropListGroup,
    MatSortModule,
    MatIconModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
