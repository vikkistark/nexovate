import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: 'purchase-order.page.html',
  styleUrls: ['purchase-order.page.scss']
})
export class purchaseOrderPage implements OnInit {

  purchaseorder: any[]=[];
  constructor(
  public  router: Router
  ) {}

  ngOnInit(){
    this.purchaseorder = [{name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'}]
  }

  openOrderDetail(){
    this.router.navigate(['/purchase-order-detail']);
  }

  back(){
    this.router.navigate(['/purchase-order-filter']);
  }
}
