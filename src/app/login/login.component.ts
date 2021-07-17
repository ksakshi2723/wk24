import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 form={
    email:"",
    password:""

  }

  constructor() { }

  ngOnInit(): void {}
  login(){
    this.form.email=(String)($('#floatingInput').val());
    this.form.password=(String)($('#floatingPassword').val());
 
    const url="http://localhost:5000/login";
      fetch(url,{
        method:'post',
        headers: {
          'Content-Type': 'application/json',
          },
        body:JSON.stringify(this.form)

      }).then((res)=>res.json())
      .then((res)=>{ 
        console.log(res)
        alert(res.message);
        
      })
      .catch((e)=>{
        alert("login failed");
      })
}
}

