import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalPage } from './approval';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    ApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovalPage),
    HttpModule
  ],
  exports: [
    ApprovalPage
  ]
})
export class ApprovalPageModule {}
