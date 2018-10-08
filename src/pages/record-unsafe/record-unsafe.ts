import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Item } from '../../models/item';
import { record } from '../../models/record';
import { Items } from '../../providers';

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
  public mail: string;
  public date: string;
  public department: string;

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,private camera: Camera,
              private http: Http) {
    this.currentItems = this.items.query();
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
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  };

  sendServer(){


    console.log(this.mail);
    console.log(this.date);
    console.log(this.department);
    console.log(this.base64Image);
    console.log(this.date);

    var date = this.date.split("-");

    let rec = new record(this.mail,this.department,this.base64Image,this.date);


    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let data=JSON.stringify({mail : this.mail,department : this.department,photo:this.base64Image,date :{date : date[0],year : date[1], month : date[2] } });

    this.http.post('http://192.168.8.101:8080/greeting', data, {headers}).map(res => res.json())
      .subscribe(res => {
        alert("success:");
      }, (err) => {
        alert("failed");
      });







  }

}
