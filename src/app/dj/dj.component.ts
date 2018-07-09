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

  meh() {
   
    var checkBox = document.getElementById("meh");
    var text = document.getElementById("text").style.display="block";
    var text = document.getElementById("text1").style.display="none";
    
    
    
    // if (checkBox.check == true){
    //   text.style.display = "block";
    // } else {
    //   text.style.display = "none";
    // }

  
  }
  myFunction(){
    
    var text = document.getElementById("text1").style.display="block";
    var text = document.getElementById("text").style.display="none";
  }

}
