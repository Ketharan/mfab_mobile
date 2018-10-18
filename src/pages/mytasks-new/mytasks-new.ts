import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {task} from "../../models/Task";
import {Http} from "@angular/http";

/**
 * Generated class for the MytasksNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytasks-new',
  templateUrl: 'mytasks-new.html',
})
export class MytasksNewPage {

  public userMail : string;
  private recordId : string;
  private department : string;
  private newTask : task;

  private currentNewTasks : Array<task>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.currentNewTasks = [];
    this.userMail = "ameer@gmail.com";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytasksNewPage');
    this.getMyTasksNew();
  }



  navigateToDetails(recordId : string) {
    this.navCtrl.push('MyTasksNewDetailsPage', {
      data: recordId
    });
  }

  getMyTasksNew(){
    //department and id attribute of all pending instances
    //query <== state = "PENDING" and userMail = "currentUsermail";
    this.http.get('http://localhost:8080/getMyTasksNew?userMail=' + this.userMail).map(res => res.json())
      .subscribe(res => {
        for (let subItem of res){
          this.recordId =  subItem['recordId'];
          this.department = subItem['department'];
          this.newTask = new task(null,null);
          this.newTask.department = this.department;
          this.newTask.recordId = this.recordId;
          this.currentNewTasks.push(this.newTask);
        }
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert("Unable to record. Check your internet connectivity.");
      });

  }

}
