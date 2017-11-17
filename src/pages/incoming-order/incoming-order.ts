import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-incoming-order',
  templateUrl: 'incoming-order.html'
})
export class IncomingOrderPage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('order').valueChanges();
  }

}
