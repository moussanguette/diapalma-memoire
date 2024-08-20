import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBilletPageRoutingModule } from './detail-billet-routing.module';

import { DetailBilletPage } from './detail-billet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBilletPageRoutingModule
  ],
  declarations: [DetailBilletPage]
})
export class DetailBilletPageModule {}
