import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.loginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.loginPageModule)
  },
  {
    path: 'domain',
    loadChildren: () => import('./domain/domain.module').then(m => m.domainPageModule)
  },
  {
    path: 'purchase-order',
    loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.purchaseOrderPageModule)
  }
  ,
  {
    path: 'purchase-order/:type',
    loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.purchaseOrderPageModule)
  }
  ,
  {
    path: 'purchase-order-list',
    loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.purchaseOrderPageModule)
  },
  {
  path: 'purchase-order/:id',
  loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.purchaseOrderPageModule)
}
,
  {
    path: 'purchase-order-approval',
    loadChildren: () => import('./purchase-order-approval/purchase-order-approval.module').then(m => m.purchaseOrderApprovalPageModule)
  }
  ,
  {
    path: 'purchase-detail',
    loadChildren: () => import('./purchase-order-detail/purchase-order-detail.module').then(m => m.purchaseOrderDetailPageModule)
  },
  {
    path: 'purchase-detail/:number/:type',
    loadChildren: () => import('./purchase-order-detail/purchase-order-detail.module').then(m => m.purchaseOrderDetailPageModule)
  },
  {
    path: 'purchase-order-filter',
    loadChildren: () => import('./purchase-order-filter/purchase-order-filter.module').then(m => m.purchaseOrderFilterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
