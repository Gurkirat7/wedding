import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dj',
  templateUrl: './dj.component.html',
  styleUrls: ['./dj.component.css']
})
export class DjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  catList = [
    {
      catCode:'arabic',
      cat: 'Arabic',
      checked:false
    },
    {
      catCode:'indian',
      cat: 'Indian',
      checked:false
    },
    {
      catCode:'pakistan',
      cat: 'Pakistan',
      checked:false
    }
  ];
  catChecked(index){
    // console.log("hi");1
    this.catList[index].checked = !this.catList[index].checked;
    console.log(this.catList);  
  }

  // meh() {
   
  //   var checkBox = document.getElementById("meh");
  //   var text = document.getElementById("text");
  //   if (checkBox.checked == true){
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }

  
  // }

}
