import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form={
    name:"",
    email:"",
    mobile:"",
    password:"",
    confirmpassword:""

  }

  constructor() { }

  ngOnInit(): void {
  }
  Register(){
    this.form.name=(String)($('#name').val());
    this.form.email=(String)($('#floatingInput').val());
    this.form.mobile=(String)($('#mobile').val());
    this.form.password=(String)($('#password').val());
    this.form.confirmpassword=(String)($('#cpassword').val());
    // alert(this.form.email);
    const url="http://localhost:5000/register";
    fetch(url,{
      method:'post',
      headers: {
        'Content-Type': 'application/json',
        },
      body:JSON.stringify(this.form)

    }).then((res)=>res.json())
    .then((res)=>{
      alert(res.message);
    })
    .catch((e)=>{
         alert(e);
      // console.log("error",e);
    })

}

}
