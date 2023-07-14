import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../service/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage {
  addressNumber: any;
  addressBook: any;
  alphaName: any;
  userId: any;
  addressNo: any;
  isLoading: boolean;
  AwaitingCount: any;
  ApprovedCount: any;
  rejectOrdersCount: any;

  constructor(
  public  router: Router,
  public service: ApiService,
  private loadingCtrl: LoadingController,
  private alertController: AlertController
  ) {}
  
  ngOnInit(){
    
      this.getAllOrder();
    
      this.getAllApprovedOrder();
    
      this.getAllApprovedOrder();
    
    }

    async getAllOrder(){
      this.isLoading = true;
      this.service.getAllQuededPOorder().then((res) => {
        this.AwaitingCount = res.PurchaseOrders.length;
        this.isLoading = false;
      })
      .catch((error) => {
        this.AwaitingCount = 0;
        this.isLoading = false;
      });
    }

    async getAllApprovedOrder(){
      this.isLoading = true;
      this.service.getAllApprovedPOorder().then((res) => {
        this.ApprovedCount = res.InquireApprovedOrders.length;
        this.isLoading = false;
        console.log(res);
      })
      .catch((error) => {
        this.ApprovedCount = 0;
        this.isLoading = false;
      });
    }
  
    async getAlRejectedOrder(){
      this.isLoading = true;
  
      this.service. getAllRejectedPOorder().then((res) => {
        this.isLoading = false;
        this.rejectOrdersCount = res.InquireApprovedOrders.length;
      })
      .catch((error) => {
        this.isLoading = false;
        this.rejectOrdersCount = 0;
        console.error(error);
      });
    }



  back(){
    this.router.navigate(['/login']);
  }
  openPO(order?){
  this.router.navigate([`/purchase-order/${order}`]);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  login(){
    this.showLoading()
    let userId = 'jde';
    let password = 'Welcome1!'
    let base64 = btoa(userId+":"+password);
    // this.router.navigate(['/dashboard']);
    this.service.UserLogin(base64,this.userId).subscribe(res=>{
      this.addressBook = res;
      this.addressBook.address_number = this.addressBook[ 'Address Number' ];
      this.addressBook.address_number_desc = this.addressBook[ 'Address Number_desc' ];

      // this.alphaName = this.addressBook[ 'Address Number_desc' ];

      console.log(res);
      this.router.navigate(['/dashboard']);
      this.loadingCtrl.dismiss();
    },
    err=>{
      this.loadingCtrl.dismiss();
      this.router.navigate(['/dashboard']);
    })

  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }
}

