import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemNameComponent } from './components/item-name/item-name.component';

import { TableDisplayComponent } from './components/table-display/table-display.component'
import { CreateRiskComponent } from './components/create-risk/create-risk.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'



import {Sort, MatSortModule} from '@angular/material/sort';


// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatFormFieldModule } from '@angular/material/form-field'
// import { MatSelectModule, matSelectAnimations } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
// import { MatIconModule } from '@angular/material/icon';


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

  
    MaterialModule,

    
    MatSortModule,
    
    
   

    HttpClientModule,
    
    
    CommonModule, 
    CreateRiskComponent
  ],
  exports: [ToolbarComponent, MatSortModule, CommonModule, CreateRiskComponent,MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }