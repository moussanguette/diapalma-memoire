import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  account = {} as any;
  auth = getAuth();

  email = {} as any
  password = {} as any

  constructor() { }

  ngOnInit() {
  }

  registerUser(){

    createUserWithEmailAndPassword(this.auth, this.account.email, this.account.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    
    
    // ..
  });

  }

}
