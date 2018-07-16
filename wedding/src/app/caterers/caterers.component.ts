import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute, Params, ActivationEnd} from '@angular/router';
@Component({
  selector: 'app-caterers',
  templateUrl: './caterers.component.html',
  styleUrls: ['./caterers.component.css']
})
export class CaterersComponent implements OnInit {


  titlename: String = ' ';
constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    // this.reloadData();
    console.log('comong here');
    this.activatedRoute.params.subscribe((params: Params) => {
        this.titlename = params.keyword;
        this.getdetails(this.titlename);
        console.log(this.titlename);
    });
}

Keyvalue: String = '';
catDetails: any = '';
getdetails(keywords) {
  this.httpClient.get('http://localhost:3000/met/sub/?keyword=' + keywords)
    .subscribe(
      (data: any) => {
         this.catDetails = data;
         console.log(keywords);
         this.Keyvalue = keywords;
      }
    );
  }



  ngOnInit() {
  }

}
