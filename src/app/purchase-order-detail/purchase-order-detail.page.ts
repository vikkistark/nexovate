import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-purchase-order-detail',
  templateUrl: 'purchase-order-detail.page.html',
  styleUrls: ['purchase-order-detail.page.scss']
})
export class purchaseOrderDetailPage implements OnInit {

  purchaseOrder: any=null;
  segment: any = 'order';
  purchaseorderDetail: any[] = [];
  orderType: any;
  orderNumber: any;
  notes: any;
  currentUrl: string;
  isToggled: boolean;
  domesticPurchaseOrder: any = null;
  lineAttachmentText:any;
  isModalOpen: boolean;
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
  ];
  isLoading: boolean;

  constructor(
  public  router: Router,
  private route: ActivatedRoute,
  public service: ApiService,
  private toastController: ToastController,
  private alertController: AlertController,
  private loadingCtrl: LoadingController,

  

  ) {}

  ngOnInit(){
    this.isLoading = true;
    this.currentUrl =  this.router.url;
    this.orderType = this.route.snapshot.paramMap.get('type');
    this.orderNumber = this.route.snapshot.paramMap.get('number');
    this.service.getOrderDetail(this.orderNumber,this.orderType).then((res) => {
      this.isLoading = false;
      this.purchaseOrder = res;
  }); 
}


toggleChangeCurrency(event){
  this.isLoading = true;
  this.isToggled =event.detail.checked;
  if (this.isToggled !== false) {
    this.service.getDomesticOrderDetail(this.orderNumber,this.orderType).then((res) => {
      this.isLoading = false;
      this.domesticPurchaseOrder = res;
      this.purchaseOrder.OrderAmount = this.domesticPurchaseOrder.DOMAmountCommitted;
      this.purchaseOrder.CurrencyCode = this.domesticPurchaseOrder.DOMCurrencyCode;

    }); 
  } 
  else
   {
    this.service.getOrderDetail(this.orderNumber,this.orderType).then((res) => {
      this.isLoading = false;
      this.domesticPurchaseOrder = null
      this.purchaseOrder = res;
    });
  }
  
}

  back(){
    if(this.router.url === '/purchase-order/Awaiting'){
      this.router.navigate(['/purchase-order-list']);
    }
    else{
      this.router.navigate(['/purchase-order/Awaiting']);
    }
  }
  
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  ApproveOrder(){
    this.service.ApproveOrder(this.orderNumber,this.orderType,this.notes).then((res) => {
      res;
      this.presentToast('middle','Order Approved');
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

  RejectOrder(){
    this.service.RejectOrder(this.orderNumber,this.orderType,this.notes).then((res) => {
      res;
      this.presentToast('middle','Order Rejected');
    });
  }

  openLineAttachment() {
    this.isModalOpen = true;
  }
  saveLineAttachment(attachment){
    this.service.saveLineAttachment(attachment).then((res) => {
      res;
      // this.presentToast('middle','Attachment Added');
    });
  }
  async openAlert(lineNo,OrdSuf) {
    const alert = await this.alertController.create({
      header: 'Enter Notes',
      inputs: [
        {
          name: 'LineAttachment',
          type: 'text',
          placeholder: 'Your Text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            let lineAttachment = {
              "DocumentNo": this.purchaseOrder.OrderNumber,
              "OrderType": this.purchaseOrder.OrderType,
              "LineNo": lineNo,
              // "OrderCompany": "00001",
              "OrderSuffix": OrdSuf,
              "AttachmentName": "Attachment ORCH 3",
              "AttachmentString": data.LineAttachment
            }
            this.saveLineAttachment(lineAttachment);
            console.log('Saved clicked', data.text);
          }
        }
      ]
    });

    await alert.present();
  }
}
