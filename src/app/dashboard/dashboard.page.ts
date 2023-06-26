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

  constructor(
  public  router: Router,
  public service: ApiService,
  private loadingCtrl: LoadingController,
  private alertController: AlertController
  ) {}
  
  back(){
    this.router.navigate(['/login']);
  }
  openPO(number?){
    if(this.addressNumber){
      this.router.navigate([`/purchase-order/${number}`]);
    }
    else{
      this.router.navigate(['/purchase-order']);
    }
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

