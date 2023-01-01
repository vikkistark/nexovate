import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage {

  constructor(
  public  router: Router
  ) {}

  back(){
    this.router.navigate(['/login']);
  }
  openPO(){
    this.router.navigate(['/purchase-order-filter']);
  }
}

