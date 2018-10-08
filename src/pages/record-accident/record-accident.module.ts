import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordAccidentPage } from './record-accident';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    RecordAccidentPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordAccidentPage),
    HttpModule
  ],
  exports: [
    RecordAccidentPage
  ]
})
export class RecordAccidentPageModule {}
