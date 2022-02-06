import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, router: Router) {
    if (!afAuth.user) {
      alert("hi");
      router.navigate(['login']);
    }
   }

  ngOnInit(): void {
  }

  logout(): void {
      console.log(this.afAuth.signOut());
  }

}
