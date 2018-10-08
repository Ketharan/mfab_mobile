import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {pendingTask} from "../../models/pendingTask";
import { pendingTasks } from "../../mocks/providers/pendingTasks";

/**
 * Generated class for the MytasksNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-new',
  templateUrl: 'mytasks-new.html',
})
export class MytasksNewPage {

  currentPendingTasks : pendingTask[] ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public PendingTasks: pendingTasks) {
    this.currentPendingTasks = this.PendingTasks.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksNewPage');
  }

  navigateToDetails() {
    this.navCtrl.push('MyTasksNewDetailsPage');
  }

}
