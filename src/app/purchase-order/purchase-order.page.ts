import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../service/service';


@Component({
  selector: 'app-purchase-order',
  templateUrl: 'purchase-order.page.html',
  styleUrls: ['purchase-order.page.scss']
})
export class purchaseOrderPage implements OnInit {

  isModalOpen: boolean = false;
  branchPlant:any;
  OrderComapany:any;
  orderType:any;


  purchaseorder: any[]=[];
  addressNumber: any;
  OrderList: any = [];
  noData: boolean = false;
  constructor(
  public  router: Router,
  public service: ApiService,
  private loadingCtrl: LoadingController,


  ) {}

  ngOnInit(){
    this.OrderList = [];
    this.noData = false;
    this.getAllOrder();
  }
  ionViewWillEnter() {
    this.ngOnInit();
  }

  async getAllOrder(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
    this.service.getAllQuededPOorder().then((res) => {
      this.OrderList = res.SRFR_Orders_Awaiting_Approval_1;
      this.noData = this.OrderList.length > 0 ? false : true ;
      this.loadingCtrl.dismiss();
      console.log(res);
    })
    .catch((error) => {
      this.noData = true;
      this.loadingCtrl.dismiss();
      console.error(error);
    });
  
    // subscribe(res=>{
    //   this.OrderList = res.SRFR_Orders_Awaiting_Approval_1;
    // }
    // ,
    // err=>{
    //   this.OrderList = []
    // });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openOrderDetail(){
    this.router.navigate(['/purchase-order-detail']);
  }

  back(){
    this.router.navigate(['/dashboard']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  resetAllFilter(){
    this.branchPlant='';
    this.OrderComapany='';
  }

  searchPO(event){
    // let userId = 'JDE';
    // let password = 'Welcome1!'
    // let base64 = btoa(userId+":"+password);
    // this.showLoading();
    // setTimeout(() => {
    //   this.service.searchPoByAddressNumber(base64,this.addressNumber).subscribe(res=>{
    //     this.OrderList = res.SRFR_Orders_Awaiting_Approval_1;
    //   }
    //   ,
    //   err=>{
    //     this.OrderList = []
    //   });
    // }, 1000);
    
  }
  async showLoading() {
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading...',
    //   duration: 3000,
    //   spinner: 'circles',
    //   backdropDismiss: false,
    //   keyboardClose: false
    // });
    // loading.present();

}
}