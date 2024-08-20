import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserverPageRoutingModule } from './reserver-routing.module';

import { ReserverPage } from './reserver.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserverPageRoutingModule,
    RouterModule.forChild([{ path: '', component: ReserverPage }])
  ],
  declarations: [ReserverPage],
  exports: [ReserverPage],
})
export class ReserverPageModule {}
