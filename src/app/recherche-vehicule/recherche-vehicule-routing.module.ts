import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheVehiculePage } from './recherche-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheVehiculePageRoutingModule {}
