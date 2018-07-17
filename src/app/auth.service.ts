import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, public snackBar: MatSnackBar) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.openSnackBar("Succeed Login", "OK")
      })
      .catch(err => {
        this.openSnackBar(`Something went wrong: ${err.message}`, "OK")
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.openSnackBar("Succeed Login", "OK")
      })
      .catch(err => {
        this.openSnackBar(`Something went wrong: ${err.message}`, "OK")
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.openSnackBar("Succeed Logout", "OK")
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}