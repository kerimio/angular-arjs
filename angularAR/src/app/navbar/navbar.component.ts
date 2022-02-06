import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'


//javascript
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(public afAuth: AngularFireAuth) { }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  };

  logout(): void {
    console.log(this.afAuth.signOut());
}

}


