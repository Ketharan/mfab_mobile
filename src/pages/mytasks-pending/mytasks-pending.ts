import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pendingTask } from "../../models/pendingTask";
import { pendingTasks } from "../../mocks/providers/pendingTasks";

/**
 * Generated class for the MytasksPendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-pending',
  templateUrl: 'mytasks-pending.html',
})
export class MytasksPendingPage {
  currentPendingTasks : pendingTask[] ;

  constructor(public navCtrl: NavController,  public PendingTasks: pendingTasks,
              public navParams: NavParams) {
    this.currentPendingTasks = this.PendingTasks.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksPendingPage');
  }

  navigateToDetails() {
    this.navCtrl.push('MyPendingDetailsPage');
  }

}
