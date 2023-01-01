import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-domain',
  templateUrl: 'domain.page.html',
  styleUrls: ['domain.page.scss']
})
export class domain {

  constructor(
    public router: Router,
    private navCtrl: NavController
  ) {
    
  }

  back() {
    this.router.navigate(['/login']);
    if(this.navCtrl){
      this.navCtrl.pop();
    }
  }

}
