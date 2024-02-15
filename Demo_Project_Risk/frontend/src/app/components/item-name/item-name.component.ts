import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css'],

  providers:[GetDataService]
})
export class ItemNameComponent implements OnInit {

  data !:any;

  arr:any = []
  newArr :any[] =[]

  @Output() newItem = new EventEmitter();

  constructor(private dataService:GetDataService){}

  ngOnInit(): void {
    this.dataService.getStudents().subscribe((res)=>{
      console.log(res);


      this.data = res.products;

      this.data.map((product:any) =>{
        console.log(product.title)
        this.arr.push(product.title)
      })
      // console.log(`data array ${this.data}`)

      
    this.newArr =this.arr.slice(0,2);

    console.log(this.newArr)
     


    })
    
  }


 





}
