import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
account = {} as any;
email = {} as any
password = {} as any

//boite d'Alert mot de passe oublié
public alertButtons = [
  {
    text: 'Annuler',
    role: 'cancel',
    handler: () => {
      console.log('Alert canceled');
    },
  },
  {
    text: 'Envoyer',
    role: 'confirm',
    handler: (data : any)=>{
      this.resetPassWord(data)
      console.log('Alert confirmed');
    }
  },

];
  public alertInputs = [
    {
      placeholder: 'EMail',
      type: 'email',
    },
    
  ];

  constructor(private router : Router, private alertController: AlertController) { 
    this.account = {};
  }

  ngOnInit() {
  }

  // connexion
  auth = getAuth();
  login(){
    
    this.router.navigate(['/home'])
/*
    signInWithEmailAndPassword(this.auth, this.account.username, this.account.password )
    .then((userCredentiel)=>{
      //sign in
      const user = userCredentiel;
      console.log(user);
      
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code erreur ",errorCode);
      console.log("message erreur ", errorMessage);
      
      
    })
    console.log(this.account.username);
    //this.router.navigate(['/home'])
    
    */
  }

  //reinitialiser mot de passe
  resetPassWord(data : any){
    this.email= data[0]
    sendPasswordResetEmail(this.auth, this.email)
  .then(() => {
    // Password reset email sent!
    // ..
    this.alertResetPassword()
    console.log(this.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }
  
}
