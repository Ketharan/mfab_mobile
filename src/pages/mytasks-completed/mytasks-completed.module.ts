import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksCompletedPage } from './mytasks-completed';

@NgModule({
  declarations: [
    MytasksCompletedPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksCompletedPage),
  ],
})
export class MytasksCompletedPageModule {}
