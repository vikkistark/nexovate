import { Component } from '@angular/core';
import { ApiService } from '../service/service';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs'
import { items } from './tab2.model';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: Observable<any[]>;

  constructor(
    private apiservice:ApiService,
    private firestore: AngularFirestore
  ) {
    // this.apiservice.getItems();
    this.get();
  }
  itemscollection:AngularFirestoreCollection<any>;
  items:Observable<any[]>;
  aaa = new items;
  onsubmit(){
    this.itemscollection = this.firestore.collection('items');
    this.itemscollection.add(JSON.parse(JSON.stringify(this.aaa)))
     .then((res =>{

     }))
  }
  viewItems(){
    this.itemscollection = this.firestore.collection('items');
    this.items = this.itemscollection.valueChanges();
  }



  get(){
    this.apiservice.getItems().subscribe(result=>{
      result;
    })
  }
}
