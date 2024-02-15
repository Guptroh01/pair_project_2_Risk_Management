import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnInit {

  constructor(private http:HttpClient) { }
  




  url:any = 'https://dummyjson.com/products?limit=10';

  ngOnInit(): void {
   this.getStudents()
  }


  getStudents():Observable<any>{

    return this.http.get(this.url)


  }


}
