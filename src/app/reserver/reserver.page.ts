import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.page.html',
  styleUrls: ['./reserver.page.scss'],
})
export class ReserverPage implements OnInit {

  constructor(private router : Router, private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }
 async rechercherVehiculle(){
    const loading = await this.loadingCtrl.create({
      message: 'Veuillez patienter...',
      duration: 3000,
    });

    loading.present();

    this.router.navigate(['/recherche-vehicule'])
    console.log('recherche');
    
  }

 
}
