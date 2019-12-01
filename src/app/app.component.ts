import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  scrolledOffTop: boolean = false;
  menuOpen: boolean = false;
  mobileMode: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    this.scrolledOffTop = (window.pageYOffset > 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileMode = window.innerWidth <= 992;
    this.menuOpen = this.mobileMode && this.menuOpen;
  }

  toggleMenu() {
    if(this.mobileMode) this.menuOpen = !this.menuOpen;
    else this.menuOpen = true;
  }

  ngOnInit() {
    this.mobileMode = window.innerWidth <= 992;
  }
}
