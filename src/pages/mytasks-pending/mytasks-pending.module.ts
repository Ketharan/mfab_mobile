import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytasksPendingPage } from './mytasks-pending';

@NgModule({
  declarations: [
    MytasksPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(MytasksPendingPage),
  ],
})
export class MytasksPendingPageModule {}
