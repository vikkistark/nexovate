import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-approval',
  templateUrl: 'purchase-order-approval.page.html',
  styleUrls: ['purchase-order-approval.page.scss']
})
export class purchaseOrderApprovalPage implements OnInit {

  purchaseOrderFilter: any[]=[];
  constructor(
  public  router: Router
  ) {}

  ngOnInit(){
    this.purchaseOrderFilter = [{name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'},
                        {name: 'Henrich Orth', stockName:'Saxar Gmbh', location: 'Europe', cost: '45,209.92 EUR', days: '100 Days Old'}]
  }

  openOrder(){
    this.router.navigate(['/purchase-order']);
  }

  back(){
    this.router.navigate(['/dashboard']);
  }
}
