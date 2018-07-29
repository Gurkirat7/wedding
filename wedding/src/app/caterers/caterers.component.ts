import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute, Params, ActivationEnd} from '@angular/router';
@Component({
  selector: 'app-caterers',
  templateUrl: './caterers.component.html',
  styleUrls: ['./caterers.component.css']
})
export class CaterersComponent implements OnInit {
token = null;
username = null;
y = null;
  titlename: String = ' ';
constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    // this.reloadData();
    this.token = window.localStorage.getItem('token');
    this.username = window.localStorage.getItem('username');
    console.log('coming here');
    this.activatedRoute.params.subscribe((params: Params) => {
        this.titlename = params.keyword;
        this.getdetails(this.titlename);
        this.y = {'savekey': this.username , 'description': '', 'f_name': '', 'l_name': '', 'email': '', 'phone': '', 'experience': '',
        'photo': '', 'username': ''};
    });
}


Keyvalue: String = '';
catDetails: any = '';
proDetails: any = '';
getdetails(keyword) {
  this.httpClient.get('http://localhost:3000/met/sub/' + keyword)
    .subscribe(
      (data: any) => {
         this.catDetails = data;
      }
    );

  }

  onclick(keyword) {
    this.httpClient.get('http://localhost:3000/met/search/' + keyword)
    .subscribe(
      (data: any) => {
         this.proDetails = data;
  }
);
}

contactsave(x) {
  console.log(this.y);
  console.log(x);

     this.y.f_name = x.f_name;
     this.y.l_name = x.l_name;
     this.y.description = x.description;
     this.y.experience = x.experience ;
     this.y.phone = x.phone;
     this.y.email = x.email;
     this.y.photo = x.photo;
     this.y.username = x.username;
     console.log(this.y);
  console.log('"calling contactsave"');
  this.httpClient.post('http://localhost:3000/users_api/saveContact',
    this.y)
    .subscribe(
      (data: any) => {
        if (data.ok) {
          alert('Thank You');
        } else {
          alert('Error');
        }
      }
    );
  }
  ngOnInit() {
  }

}
