import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { task } from "../../models/Task";
import { pendingTasks } from "../../mocks/providers/pendingTasks";
import {Http} from '@angular/http';
/**
 * Generated class for the PendingTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-tasks',
  templateUrl: 'pending-tasks.html',
})
export class PendingTasksPage {

  public userMail : string;
  private recordId : string;
  private department : string;
  private pendingTask : task;


  private currentPendingTasks : Array<task>;


  constructor(public navCtrl: NavController, public PendingTasks: pendingTasks,
              public modalCtrl: ModalController,private http: Http) {
    this.currentPendingTasks = [];
    this.userMail = "gingerameer@gmail.com";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingTasksPage');
    this.getPendingDetails();
  }

  navigateToDetails(recordId : string) {
    this.navCtrl.push('MyPendingDetailsPage', {
      data: recordId
    });
  }

  getPendingDetails(){
   //department and id attribute of all pending instances
   //query <== state = "PENDING" and userMail = "currentUsermail";
    this.http.get('http://localhost:8080/getPendingDetails?userMail=' + this.userMail).map(res => res.json())
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
