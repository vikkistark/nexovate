import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { purchaseOrderFilterPage } from './purchase-order-filter.page';

const routes: Routes = [
  {
    path: '',
    component: purchaseOrderFilterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class purchaseOrderFilterPageRoutingModule {}
