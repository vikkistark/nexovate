import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { purchaseOrderDetailPage } from './purchase-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: purchaseOrderDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class purchaseOrderDetailPageRoutingModule {}
