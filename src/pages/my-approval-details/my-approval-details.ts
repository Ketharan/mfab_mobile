import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyApprovalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-approval-details',
  templateUrl: 'my-approval-details.html',
})
export class MyApprovalDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyApprovalDetailsPage');
  }


  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Confirm Approval?',
      message: 'Are you really want to approve?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()

  }

}
