import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { CompletedOrderPage } from '../pages/completed-order/completed-order';
import { IncomingOrderPage } from '../pages/incoming-order/incoming-order';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDu856A5n8cT_lm_QG79OGSZzphFvDT8Kg",
  authDomain: "east-go-itb.firebaseapp.com",
  databaseURL: "https://east-go-itb.firebaseio.com",
  projectId: "east-go-itb",
  storageBucket: "east-go-itb.appspot.com",
  messagingSenderId: "34758475167"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    OrderlistPage,
    CompletedOrderPage,
    IncomingOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    OrderlistPage,
    CompletedOrderPage,
    IncomingOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
