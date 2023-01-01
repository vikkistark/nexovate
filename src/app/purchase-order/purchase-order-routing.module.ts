import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { purchaseOrderPage } from './purchase-order.page';

const routes: Routes = [
  {
    path: '',
    component: purchaseOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class purchaseOrderPageRoutingModule {}
