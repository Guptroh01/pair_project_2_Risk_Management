import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component ,ViewChild ,AfterViewInit,Injectable} from '@angular/core';
import { Risk } from 'src/app/Risk';
import {LiveAnnouncer} from '@angular/cdk/a11y';
// import { MatSort,Sort} from '@angular/material/sort';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table'




const  risks_arr:Risk[] = [

  {
    Risk_id:1,
    Risk_Category:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },


  {
    Risk_id:2,
    Risk_Category:'Reserviour damage',
    Hazards:['corrosion','cement failure'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },

  {
    Risk_id:3,
    Risk_Category:'Reserviour damage',
    Hazards:['corrosion','cement failure'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },

]

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
 
 

})




export class TableDisplayComponent implements AfterViewInit   {

  // dataSource = new MatTableDataSource(risks);
  dataSource  = new MatTableDataSource(risks_arr)
  displayedColumns: string[] = ['Risk_id', 'Risk_Category', 'Hazards', 'Risks','Mitigation_Status','Pre_mitigation_score','Post_mitigation_score','Barriers'];
 

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort !: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  

 

 

  


  

  drop(event:any){
    moveItemInArray(this.displayedColumns,event.previousIndex,event.currentIndex)

  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



}
