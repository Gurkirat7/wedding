import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-decors',
  templateUrl: './decors.component.html',
  styleUrls: ['./decors.component.css']
})


export class DecorsComponent implements OnInit {
  token = null;
  l_name = null;
  f_name = null;
  gender = null;
  email = null;
  photo = null;
  category = null;
  description = null;
  experience = null;
  phone = null;
  dob = null;
  constructor(private httpClient: HttpClient) {
    this.token = window.localStorage.getItem('token');
    this.f_name = window.localStorage.getItem('f_name');
    this.l_name = window.localStorage.getItem('l_name');
    this.gender = window.localStorage.getItem('gender');
    this.email = window.localStorage.getItem('email');
    this.photo = window.localStorage.getItem('photo');
    this.category = window.localStorage.getItem('category');
    this.description = window.localStorage.getItem('description');
    this.experience = window.localStorage.getItem('experience');
    this.phone = window.localStorage.getItem('phone');
    this.dob = window.localStorage.getItem('dob');
  }




  ngOnInit() {
  }

}


