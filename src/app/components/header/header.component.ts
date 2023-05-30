import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./responsive.css']
})
export class HeaderComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
 
  
}
