import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-detail',
  templateUrl: 'purchase-order-detail.page.html',
  styleUrls: ['purchase-order-detail.page.scss']
})
export class purchaseOrderDetailPage implements OnInit {

  purchaseOrder: any[]=[];
  segment: any = 'order';
  purchaseorderDetail: any[] = [];

  constructor(
  public  router: Router
  ) {}

  ngOnInit(){
    this.purchaseOrder = [{TotalAmount: '45,209,92 EUR',
                                 Branch:'28001 - Croissy',
                                 RequestDate: '12/09/2021',
                                 OrderDate: '12/09/2021',
                                 SupplierAddress: 'Supplier Address',
                                 ShipToAddress: 'Shipping Address'}]
  
  this.purchaseorderDetail = [{QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'},
                              {QuantityOrdered: '4 EA', stockName:'1. 30050037-(C1) BEARING DDR-1450ZZ', UnitPrice:'3.61 EUR', TotalAmount: '14.44 EUR'}]
}
  back(){
    this.router.navigate(['/purchase-order']);
  }
  
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
