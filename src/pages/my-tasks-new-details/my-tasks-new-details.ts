import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MyTasksNewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tasks-new-details',
  templateUrl: 'my-tasks-new-details.html',
})
export class MyTasksNewDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public  alertCtrl1 : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTasksNewDetailsPage');
  }

  reassign() {
    let prompt = this.alertCtrl.create({
      title: 'Reassign',
      message: "Enter the mail address : ",
      inputs: [
        {
          name: 'assigneeMail',
          placeholder: 'E-Mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Assign',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  updateAssignee() {
    let confirm = this.alertCtrl1.create({
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
