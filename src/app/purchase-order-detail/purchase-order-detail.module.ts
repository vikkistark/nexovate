import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { purchaseOrderDetailPage } from './purchase-order-detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { purchaseOrderDetailPageRoutingModule } from './purchase-order-detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    purchaseOrderDetailPageRoutingModule
  ],
  declarations: [purchaseOrderDetailPage]
})
export class purchaseOrderDetailPageModule {}
