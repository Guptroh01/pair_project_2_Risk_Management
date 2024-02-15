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

import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule, matSelectAnimations } from '@angular/material/select';
import { CreateRiskComponent } from './components/create-risk/create-risk.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';


// import {MaterialModule} from './material/material.module'
 
@NgModule({
  declarations: [
    AppComponent,
    ItemNameComponent,
    TableDisplayComponent,
  ],
  imports: [

    ToolbarComponent,   
    
   

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
    MatToolbarModule, 
    MatButtonModule,,

    HttpClientModule,


    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    CreateRiskComponent
  ],
  exports: [ToolbarComponent, MatToolbarModule, MatIconModule, MatSortModule, MatFormFieldModule, MatSelectModule, CommonModule, CreateRiskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
