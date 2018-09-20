import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

import { ListMasterPage } from './list-master';

@NgModule({
  
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    HttpModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
