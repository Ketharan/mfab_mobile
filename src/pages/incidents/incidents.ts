import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecordNearmissPage } from '../record-nearmiss/record-nearmiss';
import {recordMapEntry} from "@angular/compiler-cli/src/metadata/evaluator";


/**
 * Generated class for the IncidentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.html',
})
export class IncidentsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidentsPage');
  }

  navigateToRecord() {
    this.navCtrl.push('RecordIncidentTabsPage');
  }

  navigateToAdded() {
    this.navCtrl.push('TabsPage');
  }

}
