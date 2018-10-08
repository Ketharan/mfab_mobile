import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { pendingTask } from "../../models/pendingTask";
import { pendingTasks } from "../../mocks/providers/pendingTasks";

/**
 * Generated class for the ApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval',
  templateUrl: 'approval.html',
})
export class ApprovalPage {

  currentPendingTasks : pendingTask[] ;


  constructor(public navCtrl: NavController, public PendingTasks: pendingTasks, public modalCtrl: ModalController) {
    this.currentPendingTasks = this.PendingTasks.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
  }

  navigateToDetails() {
    this.navCtrl.push('MyApprovalDetailsPage');
  }



}
