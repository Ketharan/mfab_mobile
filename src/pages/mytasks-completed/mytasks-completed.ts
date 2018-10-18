import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { task } from "../../models/Task";
import { pendingTasks } from "../../mocks/providers/pendingTasks";
import {Http} from "@angular/http";

/**
 * Generated class for the MytasksCompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-completed',
  templateUrl: 'mytasks-completed.html',
})
export class MytasksCompletedPage {
  public userMail : string;
  private recordId : string;
  private department : string;
  private completedTask : task;


  private currentCompletedTasks : Array<task>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
    this.currentCompletedTasks = [];
    this.userMail = "gingerameer@gmail.com";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksCompletedPage');
    this.getCompletedDetails();
  }

  navigateToDetails(recordId : string) {
    this.navCtrl.push('MyTasksCompletedDetailsPage',{
      data: recordId
    });
  }

  getCompletedDetails(){
    //department and id attribute of all pending instances
    //query <== state = "PENDING" and userMail = "currentUsermail";
    this.http.get('http://localhost:8080/getMyTasksCompleted?userMail=' + this.userMail).map(res => res.json())
      .subscribe(res => {
        for (let subItem of res){
          this.recordId =  subItem['recordId'];
          this.department = subItem['department'];
          this.completedTask = new task(null,null);
          this.completedTask.department = this.department;
          this.completedTask.recordId = this.recordId;
          this.currentCompletedTasks.push(this.completedTask);
        }
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert("Unable to record. Check your internet connectivity.");
      });

  }


}
