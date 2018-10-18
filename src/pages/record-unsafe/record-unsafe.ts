import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the RecordUnsafePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-record-unsafe',
  templateUrl: 'record-unsafe.html',
})
export class RecordUnsafePage {
  public base64Image: string;
  public assignedMail: string;
  public date: string;
  public department: string;
  public userMail: string;
  public incidentType: string;
  public state: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,private camera: Camera,
              private http: Http) {
    this.userMail = "gingerameer@gmail.com";
    this.incidentType = "UNSAFE";
    this.state = "PENDING";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordNearmissPage');
  }

  /**
   * Camera configurations
   */
  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert("Permissions Rejected");
    });
  };

  sendServer(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let data=JSON.stringify({'userMail' : this.userMail, 'assignedMail' : this.assignedMail,
      'department' : this.department, 'completionDate' : this.date, 'incidentType' : this.incidentType,
      'image' : this.base64Image, 'state' : this.state });

    this.http.post('http://10.100.4.177:8080/addRecord', data, {headers}).map(res => res.json())
      .subscribe(res => {
        alert("Near-miss incident successfully recorded");
      }, (err) => {
        //alert(err.toLocaleString());
        alert("Unable to record. Check your internet connectivity.");
      });

  }
}
