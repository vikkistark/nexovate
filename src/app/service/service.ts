import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import {User} from './user.model'
import { Plugins } from "@capacitor/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
const {Http} = Plugins;


@Injectable({
  providedIn: 'root',
})

export class ApiService{
  auth:any;
  headers: any = new HttpHeaders();
  header:any;
  authtoken: any;
  
    constructor(
      public http:HttpClient,
      private storage: Storage,
      private alertController: AlertController,
      public router: Router,
      )
      {
      
    this.http = http;
    this.headers = new Headers();
    this.auth = localStorage.getItem("auth-token");
    this.headers.append("Authorization", this.auth);
    this.headers.append("Content-Type", "application/json");
    // this.checkDatabase();
    }

    checkDatabase() {
      this.storage.get('authToken').then((value) => {
        if (value !== null) {
          console.log('Database is ready');
          // Perform any operations on the database here
        } else {
          this.createDatabase();
          // Handle the case when the database is not ready
        }
      }).catch(error => {
        console.error('Failed to check the database', error);
      });
    }

    createDatabase() {
      this.storage.create().then(() => {
        console.log('Database created successfully');
        // Perform any operations on the database here
      }).catch(error => {
        console.error('Failed to create the database', error);
      });
    }

    getAuthHeader(auth?) {
      this.headers = new Headers();
      // let auth = localStorage.getItem("auth-token");
      this.headers.append("Authorization", auth);
      this.headers.append("Content-Type", "application/json");
      this.header = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth})
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin':"*",
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET,POST,PUT, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type':'application/json;charset=UTF-8',
        "Authorization": auth
        });
      this.header = headers;
    }
    getAuthHeaders(credentials?){
      let headers = new HttpHeaders();
      // headers = headers.set('Authorization', 'Basic'+' '+credentials);
      this.authtoken = localStorage.getItem("auth-token");
      headers = headers.set('jde-AIS-Auth',this.authtoken);
      headers = headers.set('Content-Type', 'application/json;charset=UTF-8');
      return headers;
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

    getItems(){
        return this.http.get('http://localhost:8080/itemavailability');
    }

    UserLogin(credential,addressnumber?): Observable<any>{
      let response;
      let headers = this.getAuthHeaders(credential);
      let headerss = new HttpHeaders();
      let content = {'Address Number':addressnumber}
      headerss = this.getAuthHeaders(credential);
      // <--temp
      // headerss = headerss.set('Authorization', 'Basic c21hZGFuYXQ6d2VsY29tZTEh');
      // headerss = headerss.set('Content-Type', 'application/json;charset=UTF-8');
      // this.http.post(`https://140.238.159.8:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AlphaName`,content,{ headers }).subscribe(res=>{
      // response = res
      // })
      // return response;
        // return this.http.post(`https://140.238.159.8:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AlphaName`,content,{ headers })
        // .pipe(catchError((error) =>{}),
        // );http://140.238.159.8:7070/jderest/studio/client/orchestrator/JDE_ORCH_Fetch_AlphaName
        // temp-->

        // working api
      //   return this.http.post(`https://140.238.159.8:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AlphaName`,content,{ headers })
      // .pipe(
        // return this.http.post(`https://demo.steltix.com/jderest/v3/orchestrator/ORCH_AB`,content,{ headers })
      //   return this.http.post(`https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AN8_For_USER?User_ID=SMADANAT`,content,{ headers })
      // .pipe(
      //   catchError((err) => {
      //     console.log('error caught in service')
      //     console.error(err);
 
      //     return throwError(err);
      //   })
      // )
      return this.http.get(`https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AN8_For_USER?User_ID=${addressnumber}`,{ headers })
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          return throwError(err);
        })
      )

      // return Http.post({
      //   url:`http://140.238.159.8:7070/jderest/studio/client/orchestrator/JDE_ORCH_Fetch_AlphaName`,headers:{'Authorization': 'Basic'+' '+credential}
      // }).then(res =>{
      //   res
      // })
    }
    searchPoByAddressNumber(credential,addressnumber?): Observable<any>{
      let response;
      let headers = this.getAuthHeaders(credential);
      let content = {'Approver_Number' : addressnumber};
      return this.http.post(`https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/JDE_ORCH_Orders_Awaiting_Approval`,content,{ headers })
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          return throwError(err);
        })
      )
    }

    getAllQuededPOorder(): Promise<any> {
        let headers = this.getAuthHeaders();
        const params = {
          Orders_older_than_days: 0,
          Waiting_more_than_days: 0,
          User_ID: 'jde'
        }
      return new Promise((resolve, reject) => {
        this.http.get(`	https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/ORCH_NX_GetPurchaseApproval`,{ headers }).subscribe(
          (response) => {
            resolve(response); // Resolve the Promise with the response data
          },
          (error) => {
            if(error.error.message === "Token Invalid: Please Request a new Token"){
              this.presentAlert('Your Login Session Expired','Try to Login Again');
              this.router.navigate(['']);

            }
            reject(error); // Reject the Promise with the error
          }
        );
      });
    }
    // order filter calls
    getAllOrderCompanyFilters(): Promise<any> {
    let headers = this.getAuthHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(`	https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/ORCH_NX_CompanyMasterSearch`,{headers }).subscribe(
        (response) => {
          resolve(response); // Resolve the Promise with the response data
        },
        (error) => {
          if(error.error.message === "Token Invalid: Please Request a new Token"){
            this.presentAlert('Your Login Session Expired','Try to Login Again');
            this.router.navigate(['']);

          }
          reject(error); // Reject the Promise with the error
        }
      );
    });
  }

  getAllBranchPlantFilters(): Promise<any> {
    let headers = this.getAuthHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(`	https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/ORCH_NX_BranchPlantMaster`,{headers }).subscribe(
        (response) => {
          resolve(response); // Resolve the Promise with the response data
        },
        (error) => {
          if(error.error.message === "Token Invalid: Please Request a new Token"){
            this.presentAlert('Your Login Session Expired','Try to Login Again');
            this.router.navigate(['']);

          }
          reject(error); // Reject the Promise with the error
        }
      );
    });
  }

  searchOrdersByFilter(OdrType,BranchPlant,OdrComp): Promise<any> {
      let response;
      let headers = this.getAuthHeaders();
      let content = 	{ "orderType" : OdrType, "branchPlant" : BranchPlant,"orderCompany" : OdrComp };
      return new Promise((resolve, reject) => { 
        this.http.post(`https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/ORCH_NX_GetPurchaseApproval`,content,{ headers }).subscribe(
      (response) => {
        resolve(response); // Resolve the Promise with the response data
      },
      (error) => {
        if(error.error.message === "Token Invalid: Please Request a new Token"){
          this.presentAlert('Your Login Session Expired','Try to Login Again');
          this.router.navigate(['']);

        }
        reject(error); // Reject the Promise with the error
      }
    );
  });
    }

    getOrderDetail(odrNumber,odrType): Promise<any> {
      let response;
      let headers = this.getAuthHeaders();
      let content = 		{
        "orderNumber" : odrNumber,
        "orderType" : odrType
        };
      return new Promise((resolve, reject) => { 
        this.http.post(`	https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/ORCH_NX_PO_Approval_OrderDetail`,content,{ headers }).subscribe(
      (response) => {
        resolve(response); // Resolve the Promise with the response data
      },
      (error) => {
        if(error.error.message === "Token Invalid: Please Request a new Token"){
          this.presentAlert('Your Login Session Expired','Try to Login Again');
          this.router.navigate(['']);

        }
        reject(error); // Reject the Promise with the error
      }
    );
  });
    }
  

    getAllQuededPOorders(): Observable<any>{
      let headers = this.getAuthHeaders();
      const params = {
        Orders_older_than_days: 0,
        Waiting_more_than_days: 0,
        User_ID: 'jde'
      }
      return this.http.get(`https://jdeps.nexovate.com:7077/jderest/v3/orchestrator/JDE_ORCH_Orders_Awaiting_Approval`,{params, headers })
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          return throwError(err);
        })
      )
    }

    login(username,password): Observable<any>{
      return this.http.post(`https://jdeps.nexovate.com:7077/jderest/v2/tokenrequest`,{username: username,password: password})
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          return throwError(err);
        })
      )
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    
}
// return this.http.post(`https://140.238.159.8:7077/jderest/v3/orchestrator/JDE_ORCH_Fetch_AlphaName`,content,{ headers })
// .pipe(catchError(this.handleError('Add Student'))
// );