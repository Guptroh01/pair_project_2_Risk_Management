import { Component,OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
// import { GetApiService } from '../../service/get-api.service';
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'


@Component({
  selector: 'app-create-risk',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule,MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.css'],
  providers:[]
})
export class CreateRiskComponent {
  // constructor(private apiService: GetApiService){}

  createRiskForm = new FormGroup({
    risk_id: new FormControl('',Validators.required),
    risk_category: new FormControl('',Validators.required),
    hazards: new FormControl( '',Validators.required),
    risks: new FormControl('',Validators.required),
    mitigation_status: new FormControl('',Validators.required),
    pre_mitigation_risk_score: new FormControl('',Validators.required),
    post_mitigation_risk_score: new FormControl('',Validators.required),
    barriers: new FormControl('',Validators.required)
  });

  // submitDetails(){
  //   console.log(this.studentForm.value)
  //   const data = (this.studentForm.value)
  // this.apiService.createStudents(data).subscribe((res)=>{
  //   console.log(res,"Hi")

  //   // })
  //   alert('Data added succesfully')

  //   this.studentForm.reset()
  // }

createRisk() {
  console.log("Create Risk Called!" ,this.createRiskForm);


}
}
