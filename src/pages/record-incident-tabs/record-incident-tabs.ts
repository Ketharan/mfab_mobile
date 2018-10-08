import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {RecordUnsafePage} from "../record-unsafe/record-unsafe";
import {RecordNearmissPage} from "../record-nearmiss/record-nearmiss";
import {RecordAccidentPage} from "../record-accident/record-accident";

/**
 * Generated class for the RecordIncidentTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record-incident-tabs',
  templateUrl: 'record-incident-tabs.html',
})
export class RecordIncidentTabsPage {

  tab1Root: any = 'RecordUnsafePage';
  tab2Root: any = 'RecordNearmissPage';
  tab3Root: any = 'RecordAccidentPage';


  tab1Title : string;
  tab2Title : string;
  tab3Title : string;


  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE','TAB3_TITLE'] ).subscribe(values => {
      this.tab1Title = "Unsafe";
      this.tab2Title = "Near-miss";
      this.tab3Title = "Accident";
    });
  }

}
