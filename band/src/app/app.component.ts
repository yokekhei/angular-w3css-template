import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'band';
  myIndex = 0;

  constructor() { }

  ngOnInit() {
    this.carousel();

    // When the user clicks anywhere outside of the modal, close it
    let modal = document.getElementById('ticketModal');
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  // Automatic Slideshow - change image every 4 seconds
  carousel() {
    setInterval(() => {
      let x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    console.log("myIndex = " + this.myIndex);
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    this.myIndex++;
    if (this.myIndex > x.length) {
      this.myIndex = 1;
    }

    console.log("index = " + this.myIndex);
    x[this.myIndex - 1].style.display = "block";
    }, 4000);
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  myFunction() {
    let x = document.getElementById("navDemo");

    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
}
