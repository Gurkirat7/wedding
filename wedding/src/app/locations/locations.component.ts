import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  products:any = 0;
  APIURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) {
    this.getAllProducts();
  }

  ngOnInit() {
  }
  getAllProducts() {
    var data:{};
    this.httpClient.post(this.APIURL+'products/getProducts',
    data)
      .subscribe(
        (data: any) => {
          this.products = data;
        }
      );
  }

}
