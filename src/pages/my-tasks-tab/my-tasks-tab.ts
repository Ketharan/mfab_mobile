import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";


/**
 * Generated class for the MyTasksTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tasks-tab',
  templateUrl: 'my-tasks-tab.html',
})
export class MyTasksTabPage {

  tab1Root: any = "MytasksNewPage";
  tab2Root: any = "MytasksPendingPage";
  tab3Root: any = "MytasksCompletedPage";



  tab1Title = "New";
  tab2Title = "Pending";
  tab3Title = "Completed";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              translateService: TranslateService) {

    translateService.get(['TAB1_TITLE', 'TAB2_TITLE','TAB3_TITLE']).subscribe(values => {
      this.tab1Title = "New";
      this.tab2Title = "Pending";
      this.tab3Title = "Completed";
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTasksTabPage');
  }

}
