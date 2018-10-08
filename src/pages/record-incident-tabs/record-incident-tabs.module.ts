import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordIncidentTabsPage } from './record-incident-tabs';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    RecordIncidentTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordIncidentTabsPage),
    TranslateModule.forChild()
  ],
  exports: [
    RecordIncidentTabsPage
  ]

})
export class RecordIncidentTabsPageModule {}
