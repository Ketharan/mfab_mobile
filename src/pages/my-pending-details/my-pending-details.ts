import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the MyPendingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-pending-details',
  templateUrl: 'my-pending-details.html',
})
export class MyPendingDetailsPage {
  private recordId : string;
  private assignedMail : string;
  private completionDate : string;
  public image : string;
  private department : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.recordId = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPendingDetailsPage');
    this.getPendingDetails();
  }

  getPendingDetails(){
    //get defined details using the given id.
    this.http.get('http://localhost:8080/getPendingRecord?recordId=' + this.recordId).map(res => res.json())
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

}
