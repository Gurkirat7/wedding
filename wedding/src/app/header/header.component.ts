import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form_insert_msg: String = '';
  token = null;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  } );

  constructor(private httpClient: HttpClient) {
    this.token = window.localStorage.getItem('token');
    console.log(this.token);
   }
   logout() {
    localStorage.clear();
    window.location.href = '/index.html';
  }

  ngOnInit() {
  }

  login() {
    console.log(this.form.value);
    console.log('"calling login function"');
    this.httpClient.post('http://localhost:3000/users_api/doLogin',
      this.form.value)
      .subscribe(
        (data: any) => {
          if (data.succ === true) {
            this.form.reset();
            this.form_insert_msg = 'Login successfully !';
            alert(data.msg);
            window.localStorage.setItem('username', data.username);
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('f_name', data.f_name);
            window.localStorage.setItem('l_name', data.l_name);
            window.localStorage.setItem('gender', data.gender);
            window.localStorage.setItem('email', data.email);
            window.localStorage.setItem('photo', data.photo);
            window.localStorage.setItem('category', data.category);
            window.localStorage.setItem('description', data.description);
            window.localStorage.setItem('experience', data.experience);
            window.localStorage.setItem('phone', data.phone);
            window.localStorage.setItem('dob', data.dob);
            window.location.href = '/index.html';
          } else {
            alert(data.msg);
          }
        }
      );
  }

}
