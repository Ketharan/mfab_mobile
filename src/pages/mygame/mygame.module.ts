import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygamePage } from './mygame';

@NgModule({
  declarations: [
    MygamePage,
  ],
  imports: [
    IonicPageModule.forChild(MygamePage),
  ],
})
export class MygamePageModule {}
