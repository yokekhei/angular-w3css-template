import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fashion-blog';

  constructor() {
  }

  ngOnInit() {
    // Toggle between hiding and showing blog replies/comments
    document.getElementById("myBtn").click();
  }

  myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "✓ Liked";
  }

  openSubscribeModal(isOpened) {
    if (isOpened == 1) {
      document.getElementById('subscribe').style.display = 'block';
    } else {
      document.getElementById('subscribe').style.display = 'none';
    }
  }
}
