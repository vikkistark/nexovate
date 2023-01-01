import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// import {AngularFirestoreModule} from 'angularfire2/firestore';

// import { firebaseConfig } from './credential';
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireModule } from 'angularfire2';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     FormsModule,
     RouterModule
    //  AngularFireModule.initializeApp(firebaseConfig),
    //  AngularFirestoreModule,
    //  AngularFireAuthModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
