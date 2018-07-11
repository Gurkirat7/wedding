import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 user(){
    document.getElementById("user1").style.display="block";
    document.getElementById("prov1").style.display="none";
 }
 prov(){
  document.getElementById("prov1").style.display="block";
  document.getElementById("user1").style.display="none";
 }
}
