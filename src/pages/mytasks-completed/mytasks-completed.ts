import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pendingTask } from "../../models/pendingTask";
import { pendingTasks } from "../../mocks/providers/pendingTasks";

/**
 * Generated class for the MytasksCompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-completed',
  templateUrl: 'mytasks-completed.html',
})
export class MytasksCompletedPage {
  currentPendingTasks : pendingTask[] ;

  constructor(public navCtrl: NavController, public PendingTasks: pendingTasks,
              public navParams: NavParams) {
    this.currentPendingTasks = this.PendingTasks.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksCompletedPage');
  }

  navigateToDetails() {
    this.navCtrl.push('MyTasksCompletedDetailsPage');
  }


}
