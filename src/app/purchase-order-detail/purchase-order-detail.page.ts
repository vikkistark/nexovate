import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/service';

@Component({
  selector: 'app-purchase-order-detail',
  templateUrl: 'purchase-order-detail.page.html',
  styleUrls: ['purchase-order-detail.page.scss']
})
export class purchaseOrderDetailPage implements OnInit {

  purchaseOrder: any[]=[];
  segment: any = 'order';
  purchaseorderDetail: any[] = [];
  orderType: any;
  orderNumber: any;

  constructor(
  public  router: Router,
  private route: ActivatedRoute,
  public service: ApiService,

  ) {}

  ngOnInit(){
    this.orderType = this.route.snapshot.paramMap.get('type');
    this.orderNumber = this.route.snapshot.paramMap.get('number');
    this.service.getOrderDetail(this.orderNumber,this.orderType).then((res) => {
      this.purchaseOrder = res;
      // this.noData = this.OrderList.length > 0 ? false : true ;
  });
    // this.purchaseOrder = [{TotalAmount: '45,209,92 EUR',
    //                              Branch:'28001 - Croissy',
    //                              RequestDate: '12/09/2021',
    //                              OrderDate: '12/09/2021',
    //                              SupplierAddress: 'Supplier Address',
    //                              ShipToAddress: 'Shipping Address'}]
  
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
