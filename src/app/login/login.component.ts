import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nam='';
  pas='';
  loginsucc=false;
  form = 
    {'nam':0,'pas':0}
  ;
  log(){
    // this.nam.length
   console.log(this.nam);
  
  this.form.nam = this.nam.length;
  this.form.pas = this.pas.length;
}
succ()
{
  if(this.nam=="Admin123" && this.pas=="7499"){
    this.loginsucc=true;  
  }
  else{
    alert("You are not registered");
  }
  this.nam='';
  this.pas='';

} 

}
