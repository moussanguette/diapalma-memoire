import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheVehiculePageRoutingModule } from './recherche-vehicule-routing.module';

import { RechercheVehiculePage } from './recherche-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheVehiculePageRoutingModule
  ],
  declarations: [RechercheVehiculePage]
})
export class RechercheVehiculePageModule {}
