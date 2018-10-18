import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the MyTasksNewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tasks-new-details',
  templateUrl: 'my-tasks-new-details.html',
})
export class MyTasksNewDetailsPage {

  private recordId : string;
  private assignerMail : string;
  private completionDate : string;
  public image : string;
  private department : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              private http:Http, public  alertCtrl1 : AlertController) {
    this.recordId = navParams.get('data');
  }

  getNewTaskDetails(){
    //get defined details using the given id.
    this.http.get('http://localhost:8080/getMicroRecord?recordId=' + this.recordId).map(res => res.json())
      .subscribe(res => {
        alert(this.recordId);

        this.assignerMail = res['userMail'];
        this.department = res['department'];
        this.completionDate = res['completionDate'];
        this.image = res['image'];

        alert(this.assignerMail);
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert(err.toString());
        alert("Unable to record. Check your internet connectivity.");
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTasksNewDetailsPage');
    this.getNewTaskDetails();
  }

  reassign() {
    let prompt = this.alertCtrl.create({
      title: 'Reassign',
      message: "Enter the mail address : ",
      inputs: [
        {
          name: 'assigneeMail',
          placeholder: 'E-Mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            alert(data['assigneeMail']);
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Assign',
          handler: data => {
            this.updateTaskAssignee(data['assigneeMail']);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  updateStatus() {
    let confirm = this.alertCtrl1.create({
      title: 'Confirm Approval?',
      message: 'Have you completed the Task?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.updateTaskStatus();
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  updateTaskStatus(){
    this.http.get('http://localhost:8080/updateTaskStatus?recordId=' + this.recordId).map(res => res.json())
      .subscribe(res => {
        alert(this.recordId);
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert(err.toString());
        alert("Unable to record. Check your internet connectivity.");
      });
  }

  updateTaskAssignee(assigneeMail : string){
    this.http.get('http://localhost:8080/updateTaskAssignee?recordId=' + this.recordId + '&assignedMail='
      + assigneeMail).map(res => res.json())
      .subscribe(res => {
        alert(this.recordId);
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert(err.toString());
        alert("Unable to record. Check your internet connectivity.");
      });
  }
}
