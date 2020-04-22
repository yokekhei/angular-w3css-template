import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parallax';
  
  constructor() { }

  ngOnInit() {
    // Change style of navbar on scroll
    window.onscroll = () => this.myFunction();
  }
  
  myFunction() {
    let navbar = document.getElementById("myNavbar");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
      navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

  // Used to toggle the menu on small screens when clicking on the menu button
  toggleFunction() {
    let x = document.getElementById("navDemo");
    
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  // Modal Image Gallery
  onClick(element) {
    let img = document.getElementById("img01") as HTMLImageElement;
    img.src = element.src;
    document.getElementById("modal01").style.display = "block";
    let captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
}
