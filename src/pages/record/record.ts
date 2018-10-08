import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecordNearmissPage } from '../record-nearmiss/record-nearmiss';

/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  recordNearmissPage : RecordNearmissPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  navigateToRecord() {
    this.navCtrl.setRoot(RecordNearmissPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

}
