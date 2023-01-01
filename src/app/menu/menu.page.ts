import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class menu {

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
