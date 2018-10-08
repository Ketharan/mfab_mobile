import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncidentsPage } from './incidents';
import {RecordNearmissPage} from "../record-nearmiss/record-nearmiss";
import {MyApp} from "../../app/app.component";


@NgModule({

  imports: [
    IonicPageModule.forChild(IncidentsPage),
  ],
  declarations: [
    IncidentsPage
  ]

})
export class IncidentsPageModule {}
