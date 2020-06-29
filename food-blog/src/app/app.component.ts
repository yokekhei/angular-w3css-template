import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-blog';

  constructor() {
  }

  ngOnInit() {
  }

  // Script to open and close sidebar
  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
}
