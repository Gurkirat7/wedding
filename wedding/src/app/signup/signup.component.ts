import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form_insert_msg: String = '';
  usersList: any;
  form = new FormGroup({
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required)
  });
  constructor(private httpClient: HttpClient) {
    // this.reloadData();
}
title = 'app';

  ngOnInit() {
  }

  singup() {
    console.log(this.form.value);
    console.log('"calling singup function"');
    this.httpClient.post('http://localhost:3000/users_api/insert',
      this.form.value)
      .subscribe(
        (data: any) => {
          if (data.ok) {
            this.form.reset();
            this.form_insert_msg = 'Signup successfully !';
            alert('Thank You For Signing Up Please Login');
            window.location.href = '/index.html';
          } else {
            this.form_insert_msg = 'Error while doing signup please try again';
          }
        }
      );

  }
  
 user() {
    document.getElementById('user1').style.display = 'block';
    document.getElementById('prov1').style.display = 'none';
    document.getElementById('sub').style.display = 'block';
 }
 prov() {
  document.getElementById('prov1').style.display = 'block';
  document.getElementById('user1').style.display = 'block';
  document.getElementById('sub').style.display = 'block';
 }
}
