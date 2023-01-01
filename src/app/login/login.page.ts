import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class login {

  constructor(
    public router: Router
  ) {
    
  }

  checkDomain() {
    this.router.navigate(['/domain']);
  }
  login(){
    this.router.navigate(['/dashboard']);
  }
}
