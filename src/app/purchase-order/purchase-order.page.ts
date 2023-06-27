import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, LoadingController } from '@ionic/angular';
import { ApiService } from '../service/service';


@Component({
  selector: 'app-purchase-order',
  templateUrl: 'purchase-order.page.html',
  styleUrls: ['purchase-order.page.scss']
})
export class purchaseOrderPage implements OnInit {

  @ViewChild('selectOrderType') selectOrderType: IonSelect;
  @ViewChild('selectOrderCompany') selectOrderCompany: IonSelect;
  @ViewChild('selectBranchPlant') selectBranchPlant: IonSelect;

  isModalOpen: boolean = false;
  branchPlant:any;
  OrderComapany:any;
  orderType:any;


  purchaseorder: any[]=[];
  addressNumber: any;
  OrderList: any = [];
  noData: boolean = false;
  AllCompanies: any = [];
  AllBranchPlants: any = [];
  AllOrderType : any = ['OP','OD'];
  constructor(
  public  router: Router,
  public service: ApiService,
  private loadingCtrl: LoadingController,


  ) {}

  ngOnInit(){
    this.OrderList = [];
    this.noData = false;
    this.getAllOrder();
    this.getAllFilters();
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
      this.OrderList = res.PurchaseOrders;
      this.noData = this.OrderList.length > 0 ? false : true ;
      this.loadingCtrl.dismiss();
      console.log(res);
    })
    .catch((error) => {
      this.noData = true;
      this.loadingCtrl.dismiss();
      console.error(error);
    });
  }

  Filter(){
    this.service.searchOrdersByFilter(this.orderType,this.OrderComapany,this.branchPlant).then((res) => {

    });
  }
  
  getAllFilters(){
    this.service.getAllOrderCompanyFilters().then((res) => {
      this.AllCompanies = []
      res.CompanyMaster.forEach(cmp => {
        this.AllCompanies.push(cmp.CompanyCode);
      });
    });
    this.service.getAllBranchPlantFilters().then((res) => {
      this.AllBranchPlants = []
      res.BranchPlantMaster.forEach(branch => {
        this.AllBranchPlants.push(branch.BranchPlant);
      });
    });
  }

  setOpen(isOpen) {
    if(isOpen === false){
      this.service.searchOrdersByFilter(this.orderType,this.branchPlant,this.OrderComapany).then((res) => {
        this.OrderList = res.PurchaseOrders;
        this.noData = this.OrderList.length > 0 ? false : true ;
    });
  }

    this.isModalOpen = isOpen;
  }

  openOrderDetail(number,type){
    this.router.navigate(['/purchase-order-detail',number,type]);
  }

  back(){
    this.router.navigate(['/dashboard']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  resetAllFilter(){
    this.orderType = null;
    this.branchPlant=null;
    this.OrderComapany=null;
  }

  clearOrderType(){
    this.orderType = null;
  }
  clearOrderCompany(){
    this.OrderComapany  = null;
  }
  clearBranch(){
    this.branchPlant = null;
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