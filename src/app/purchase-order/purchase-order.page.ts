import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
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
  toastController: any;
  PoOrderType: any;
  isLoading: boolean;
  constructor(
  public  router: Router,
  public service: ApiService,
  private route: ActivatedRoute,



  ) {}

  ngOnInit(){
    this.OrderList = [];
    this.noData = false;
    this.PoOrderType = this.route.snapshot.paramMap.get('type');
    if(this.PoOrderType === 'Awaiting' || this.router.url === '/purchase-order-list')
    {
      this.getAllOrder();
    }
    if(this.PoOrderType === 'Approved'){
      this.getAllApprovedOrder();
    }
    if(this.PoOrderType === 'Rejected'){
      this.getAllApprovedOrder();
    }
    
  }
  ionViewWillEnter() {
    this.ngOnInit();
  }

  async getAllOrder(){
    this.isLoading = true;
    this.service.getAllQuededPOorder().then((res) => {
    this.getAllFilters();
      this.OrderList = res.PurchaseOrders;
      this.noData = this.OrderList.length > 0 ? false : true ;
      this.isLoading = false;
      console.log(res);
    })
    .catch((error) => {
      this.noData = true;
      this.isLoading = false;
      console.error(error);
    });
  }

  async getAllApprovedOrder(){
    this.isLoading = true;
    this.service.getAllApprovedPOorder().then((res) => {
      this.OrderList = res.InquireApprovedOrders;
      this.noData = this.OrderList.length > 0 ? false : true ;
      this.isLoading = false;
      console.log(res);
    })
    .catch((error) => {
      this.noData = true;
      this.isLoading = false;
      console.error(error);
    });
  }

  async getAlRejectedOrder(){
    this.isLoading = true;

    this.service. getAllRejectedPOorder().then((res) => {
      this.isLoading = false;
      this.OrderList = res.InquireApprovedOrders;
      this.noData = this.OrderList.length > 0 ? false : true ;
      console.log(res);
    })
    .catch((error) => {
      this.isLoading = false;
      this.noData = true;
      console.error(error);
    });
  }

  Filter(){
    this.service.searchOrdersByFilter(this.orderType,this.OrderComapany,this.branchPlant).then((res) => {

    });
  }
  
  getAllFilters(){
    this.service.getAllBranchPlantFilters().then((res) => {
      this.AllBranchPlants = res.BranchPlantMaster;
    });
    this.service.getAllOrderCompanyFilters().then((res) => {
      this.AllCompanies = res.CompanyMaster;
    });
    this.service.getAllOrderTypeFilters().then((res) => {
      this.AllOrderType = res.DocumentTypes;
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
    if(this.PoOrderType === 'Awaiting' || this.router.url === '/purchase-order-list'){
    this.router.navigate(['/purchase-detail',number,type]);
  }

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

 
  ApproveOrder(number,type){
    this.service.ApproveOrder(number,type,null).then((res) => {
      res;
      this.presentToast('middle','Order Approved');
      this.getAllOrder();
    });
  }

  RejectOrder(number,type){
    this.service.RejectOrder(number,type,null).then((res) => {
      res;
      this.presentToast('middle','Order Rejected');
      this.getAllOrder();
    });
  }

  async presentToast(position,message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: position,
    });

    await toast.present();
    this.back();
  }
}