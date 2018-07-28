import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form_insert_msg: String = '';
  usersList: any;
  form = new FormGroup({
    photo: new FormControl('', Validators.required),
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
    experience: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });
  constructor(private httpClient: HttpClient) {
    // this.reloadData();
}
title = 'app';
// declare a property called fileuploader and assign it to an instance of a new fileUploader.
    // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000', itemAlias: 'photo'});
  ngOnInit() {
     // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
     this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     // overide the onCompleteItem property of the uploader so we are
     // able to deal with the server response.
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);

      };
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
            alert('Thank You For Signing Up. Please Login');
            window.location.href = '/index.html';
          } else {
            alert('Error while doing signup please try again');
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
