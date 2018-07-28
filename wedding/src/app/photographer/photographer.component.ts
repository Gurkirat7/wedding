import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {
  proDetails: any = '';
  username = null;
  array = null;
  constructor(private httpClient: HttpClient, private location: Location) {
    this.username = window.localStorage.getItem('username');
    this.showContacts(this.username);
  }

  showContacts(keyword) {
    this.httpClient.get('http://localhost:3000/met/savedDetails/' + keyword)
    .subscribe(
      (data: any) => {
         this.proDetails = data;
  }
);
}

DeleteContact(usrnm) {
this.array = {'savekey': this.username, 'username' : usrnm};
console.log(this.array);
this.httpClient.post('http://localhost:3000/met/DeleteContact/', this.array)
    .subscribe(
      (data: any) => {
        if (!data.ok) {
          alert('Contact Deleted');
          this.load();
        } else {
          alert('Error');
        }
      }
);
}

  ngOnInit() {
  }

  load() {
    location.reload();
    }
}
