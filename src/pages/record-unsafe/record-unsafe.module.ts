import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordUnsafePage } from './record-unsafe';
import { HttpModule } from '@angular/http';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RecordUnsafePage,
  ],
  imports: [
    IonicPageModule.forChild(RecordUnsafePage),
    TranslateModule.forChild(),
    HttpModule
  ],
  exports: [
    RecordUnsafePage
  ]
})
export class RecordUnsafePageModule {}
