import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBilletPage } from './detail-billet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBilletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBilletPageRoutingModule {}
