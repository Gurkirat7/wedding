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
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  login() {
    console.log(this.form.value);
    console.log('"calling login function"');
    this.httpClient.post('http://localhost:3000/users_api/doLogin',
      this.form.value)
      .subscribe(
        (data: any) => {
          if(data.length>0){
            this.form.reset();
            this.form_insert_msg = 'Login successfully !';
            alert('Login successfully !');
            window.location.href = '/index.html';
          } else {
            this.form_insert_msg = 'Error while doing Login please try again';
          }
        }
      );
  }

}
