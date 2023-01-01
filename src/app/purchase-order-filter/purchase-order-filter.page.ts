import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-filter',
  templateUrl: 'purchase-order-filter.page.html',
  styleUrls: ['purchase-order-filter.page.scss']
})
export class purchaseOrderFilterPage implements OnInit {

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
