import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularAR';
  constructor(public afAuth: AngularFireAuth, router: Router) {
    if (!afAuth.user) {
      alert("hi");
      router.navigate(['login']);
    }
  }
}
