import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectMyDevicePage } from './connect-my-device';

@NgModule({
  declarations: [
    ConnectMyDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectMyDevicePage),
  ],
})
export class ConnectMyDevicePageModule {}
