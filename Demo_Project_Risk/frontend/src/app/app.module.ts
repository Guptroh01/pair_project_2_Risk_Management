import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemNameComponent } from './components/item-name/item-name.component';
import { TableDisplayComponent } from './components/table-display/table-display.component'
import { CreateRiskComponent } from './components/create-risk/create-risk.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {MaterialModule} from './material/material.module'
 
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
    MaterialModule,
    HttpClientModule,
    CommonModule, 
    CreateRiskComponent,
//     MatDialogModule
  ],

  exports: [ToolbarComponent, 
            CommonModule, 
            CreateRiskComponent,
            MaterialModule,
//             MatDialogModule]
           ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }