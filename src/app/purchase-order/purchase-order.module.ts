import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { purchaseOrderPage } from './purchase-order.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { purchaseOrderPageRoutingModule } from './purchase-order-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    purchaseOrderPageRoutingModule
  ],
  declarations: [purchaseOrderPage]
})
export class purchaseOrderPageModule {}
