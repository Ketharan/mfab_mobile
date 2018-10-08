import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordNearmissPage } from './record-nearmiss';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    RecordNearmissPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordNearmissPage),
    TranslateModule.forChild(),
    HttpModule
  ],
  exports: [
    RecordNearmissPage
  ]
})
export class RecordNearmissPageModule {}
