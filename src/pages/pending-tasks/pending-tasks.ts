import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { pendingTask } from "../../models/pendingTask";
import { pendingTasks } from "../../mocks/providers/pendingTasks";

/**
 * Generated class for the PendingTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-tasks',
  templateUrl: 'pending-tasks.html',
})
export class PendingTasksPage {

  currentPendingTasks : pendingTask[] ;


  constructor(public navCtrl: NavController, public PendingTasks: pendingTasks,
              public modalCtrl: ModalController) {
    this.currentPendingTasks = this.PendingTasks.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTasksPage');
  }

  navigateToDetails() {
    this.navCtrl.push('MyPendingDetailsPage');
  }

}
