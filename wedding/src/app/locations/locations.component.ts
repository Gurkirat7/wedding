import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularWaitBarrier } from '../../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  products: any = 0;
  Mehandi: any = {'category': 'Mehandi'};
  Caterers: any = {'category': 'Caterers'};
  Themes: any = {'category': 'Themes'};
  Music: any = {'category': 'Music'};
  Designer: any = {'category': 'Designer'};
 Choreographer: any = {'category': 'Choreographer'};
 MakeUp: any = {'category': 'Make-Up'};
 Photographers: any = {'category': 'Photographers'};
 HMP: any = {'category': 'Honeymoon-Planning'};
//  WP: any = {'category': 'Wedding-Planner'};
  APIURL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {
    this.getAllImages();
  }

  ngOnInit() {
  }
  getAllProducts(keyword) {
    this.httpClient.post(this.APIURL + 'products/getProducts',
    keyword)
      .subscribe(
        (data: any) => {
          this.products = data;
        }
      );
  }

  getAllImages() {
    this.httpClient.get(this.APIURL + 'products/getImages')
      .subscribe(
        (data: any) => {
          this.products = data;
        }
      );
  }


}


