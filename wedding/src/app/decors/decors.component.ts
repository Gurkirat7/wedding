import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-decors',
  templateUrl: './decors.component.html',
  styleUrls: ['./decors.component.css']
})


export class DecorsComponent implements OnInit {
  token = null;
  key = null;
  l_name = null;
  f_name = null;
  gender = null;
  email = null;
  username = null;
  product_img = null;
  category = null;
  description = null;
  experience = null;
  phone = null;
  dob = null;
  products: any = 0;
  APIURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) {
    this.token = window.localStorage.getItem('token');
    this.key = window.localStorage.getItem('key');
    this.f_name = window.localStorage.getItem('f_name');
    this.l_name = window.localStorage.getItem('l_name');
    this.username = window.localStorage.getItem('username');
    this.gender = window.localStorage.getItem('gender');
    this.email = window.localStorage.getItem('email');
    this.product_img = window.localStorage.getItem('product_img');
    this.category = window.localStorage.getItem('category');
    this.description = window.localStorage.getItem('description');
    this.experience = window.localStorage.getItem('experience');
    this.phone = window.localStorage.getItem('phone');
    this.dob = window.localStorage.getItem('dob');
    this.getAllImages();
  }


  ngOnInit() {
  }
  getAllImages() {
    this.httpClient.get(this.APIURL + 'manage_users/getImages')
      .subscribe(
        (data: any) => {
          this.products = data;
        }
      );
  }
}


