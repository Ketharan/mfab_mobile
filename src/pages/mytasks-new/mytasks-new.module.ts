import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksNewPage } from './mytasks-new';

@NgModule({
  declarations: [
    MytasksNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksNewPage),
  ],
})
export class MytasksNewPageModule {}
