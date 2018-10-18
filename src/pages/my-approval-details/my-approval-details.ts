import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";


/**
 * Generated class for the MyApprovalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-approval-details',
  templateUrl: 'my-approval-details.html',
})
export class MyApprovalDetailsPage {

  private recordId : string;
  private assignedMail : string;
  private completionDate : string;
  public image : string;
  private department : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController,
              private http: Http) {
    this.recordId = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyApprovalDetailsPage');
    this.getApprovalRecord();
  }

  getApprovalRecord(){
    //get defined details using the given id.
    this.http.get('http://localhost:8080/getApprovalRecord?recordId=' + this.recordId).map(res => res.json())
      .subscribe(res => {
        alert(this.recordId);

        this.assignedMail = res['assignedMail'];
        this.department = res['department'];
        this.completionDate = res['completionDate'];
        this.image = res['image'];

        alert(this.assignedMail);
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert(err.toString());
        alert("Unable to record. Check your internet connectivity.");
      });
  }

  approve(){
    this.http.get('http://localhost:8080/approveCompletion?recordId=' + this.recordId).map(res => res.json())
      .subscribe(res => {
        alert(this.recordId);
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        alert(err.toString());
        alert("Unable to record. Check your internet connectivity.");
      });
  }


  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Confirm Approval?',
      message: 'Are you really want to approve?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Disagree clicked');
            this.approve();
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
    confirm.present();

  }

}
