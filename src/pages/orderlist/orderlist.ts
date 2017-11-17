import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CompletedOrderPage } from '../completed-order/completed-order';
import { IncomingOrderPage } from '../incoming-order/incoming-order';

@Component({
  selector: 'page-orderlist',
  templateUrl: 'orderlist.html'
})
export class OrderlistPage {

	tab1Root = IncomingOrderPage;
  	tab2Root = CompletedOrderPage;

  constructor(public navCtrl: NavController) {
  }

}