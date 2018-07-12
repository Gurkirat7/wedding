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
    window.location.reload();
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
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('f_name', data.f_name);
            window.localStorage.setItem('l_name', data.l_name);
            window.location.href = '/index.html';
          } else {
            alert(data.msg);
          }
        }
      );
  }

}
