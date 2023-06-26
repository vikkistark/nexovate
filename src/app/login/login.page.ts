import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../service/service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class login {
  userId:any;
  password:any;
  errorMsg:any;
  loading: boolean;

  constructor(
    public router: Router,
    public service: ApiService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private storage: Storage
  ) {
    
  }

  checkDomain() {
    this.router.navigate(['/domain']);
  }
  login(){
    this.showLoading();
    this.loading = true;
    let base64 = btoa(this.userId+":"+this.password);
    base64 = btoa(this.userId+":"+this.password);
    // this.router.navigate(['/dashboard']);
    this.service.login(this.userId,this.password).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/dashboard']);
      localStorage.setItem("auth-token",res.userInfo.token);
      let authToken
      authToken = localStorage.getItem("auth-token");
      this.saveAuthToken(res.userId.token);
      this.loadingCtrl.dismiss();
      this.loading = false;

    },
    err=>{
      this.errorMsg = err.error.message;
      this.loadingCtrl.dismiss();
      this.loading = false;
      this.presentAlert('Authentication Error',this.errorMsg);
    })

  }
  async presentAlert(headermsg,msg) {
    const alert = await this.alertController.create({
      header: headermsg,
      // subHeader: subheader,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
      spinner: 'circles',
    });

    loading.present();
  }


saveAuthToken(token: string): Promise<any> {
  return this.storage.set('authToken', token);
}

getAuthToken(): Promise<string> {
  return this.storage.get('authToken');
}
}