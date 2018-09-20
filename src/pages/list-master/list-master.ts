import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { record } from '../../models/record';
import { Items } from '../../providers';


import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  public base64Image: string;
  public mail: string;
  public date: string;
  public department: string;

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,private camera: Camera,
    private http: Http) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
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
