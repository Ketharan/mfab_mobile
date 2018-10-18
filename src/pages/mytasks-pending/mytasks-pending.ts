import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { task } from "../../models/Task";
import {Http} from "@angular/http";

/**
 * Generated class for the MytasksPendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-pending',
  templateUrl: 'mytasks-pending.html',
})
export class MytasksPendingPage {
  public userMail : string;
  private recordId : string;
  private department : string;
  private pendingTask : task;

  private currentPendingTasks : Array<task>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
    this.currentPendingTasks = [];
    this.userMail = "gingerameer@gmail.com";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksPendingPage');
    this.getPendingTasks();
  }

  navigateToDetails(recordId : string) {
    this.navCtrl.push('MyPendingDetailsPage',{
      data: recordId
    });
  }

  getPendingTasks(){
    //department and id attribute of all pending instances
    //query <== state = "PENDING" and userMail = "currentUsermail";
    this.http.get('http://localhost:8080/getMyTasksPending?userMail=' + this.userMail).map(res => res.json())
      .subscribe(res => {
        for (let subItem of res){
          this.recordId =  subItem['recordId'];
          this.department = subItem['department'];
          this.pendingTask = new task(null,null);
          this.pendingTask.department = this.department;
          this.pendingTask.recordId = this.recordId;
          this.currentPendingTasks.push(this.pendingTask);
        }
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert("Unable to record. Check your internet connectivity.");
      });

  }

}
