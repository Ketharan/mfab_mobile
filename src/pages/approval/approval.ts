import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { task } from "../../models/Task";
import {Http} from '@angular/http';
/**
 * Generated class for the ApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval',
  templateUrl: 'approval.html',
})
export class ApprovalPage {
  public userMail : string;
  private recordId : string;
  private department : string;
  private approvalTask : task;

  currentApprovalTasks : task[] ;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private http : Http) {
    this.currentApprovalTasks = [];
    this.userMail = "gingerameer@gmail.com";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
    this.getApprovalDetails();
  }

  navigateToDetails(recordId : String) {
    this.navCtrl.push('MyApprovalDetailsPage',{
      data: recordId
    });
  }

  getApprovalDetails(){
    //department and id attribute of all pending instances
    //query <== state = "PENDING" and userMail = "currentUsermail";
    this.http.get('http://localhost:8080/getApprovalDetails?userMail=' + this.userMail).map(res => res.json())
      .subscribe(res => {
        for (let subItem of res){
          this.recordId =  subItem['recordId'];
          this.department = subItem['department'];
          this.approvalTask = new task(null,null);
          this.approvalTask.department = this.department;
          this.approvalTask.recordId = this.recordId;
          this.currentApprovalTasks.push(this.approvalTask);
        }
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert("Unable to record. Check your internet connectivity.");
      });
  }

}
