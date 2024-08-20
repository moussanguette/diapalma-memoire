import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ReservationsPageModule } from '../reservations/reservations.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'reservation',
        children:[
          {
            path:'',
            loadChildren:()=> import('../reservations/reservations.module').then(m => m.ReservationsPageModule)
          }
        ]
      },

      {
        path:'reserver',
        children:[
          {
            path:'',
            loadChildren:()=> import('../reserver/reserver.module').then(m => m.ReserverPageModule)
          }
        ]
      },

      {
        path:'profil',
        children:[
          {
            path:'',
            loadChildren:()=> import('../profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'reserver',
        pathMatch:'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
