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
      checked:true
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

  // myFunction() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("meh");
  //   // Get the output text
  //   var text = document.getElementById("text");
  
  //   // If the checkbox is checked, display the output text
  //   if (checkBox.checked == true){
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  //   console.log("JIII00");
  // }}

//   meh() {
   
//     var checkBox = document.getElementById("meh");
//     var text = document.getElementById("text").style.display="block";
//     var text = document.getElementById("text1").style.display="none";
    
    
    
//     // if (checkBox.check == true){
//     //   text.style.display = "block";
//     // } else {
//     //   text.style.display = "none";
//     // }

  
//   }
//   myFunction(){
    
//     var text = document.getElementById("text1").style.display="block";
//     var text = document.getElementById("text").style.display="none";
//   }

// }
}