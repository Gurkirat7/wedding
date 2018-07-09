import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  keyword = 0;

  allWeddingPlans = [
    {
      "headerbg":"",
      "pageTitle":"weeding",
      "subTitle":"sub title"
    },
    {
      "headerbg":"",
      "pageTitle":"caters",
      "subTitle":"sub title"
    },
    {
      "headerbg":"",
      "pageTitle":"xyz",
      "subTitle":"sub title"
    }
  ];

  pageDetails:any;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {
          this.keyword = params.keyword;
          this.pageDetails = this.allWeddingPlans[this.keyword];
    });
  }

  ngOnInit() {
  }

}
