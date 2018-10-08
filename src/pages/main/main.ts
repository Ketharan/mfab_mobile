import { Component } from '@angular/core';
import { MenuController, NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'main.html'
})
export class MainPage {

  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
    DARK: 'menu-dark',
    RIGHT: 'menu-right',
  };

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  // Only enables right side menu for this page. Testing purposes.
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true, 'menu-right');
  // }
  //
  // ionViewWillLeave() {
  //   this.menuCtrl.enable(false, 'menu-right');
  // }

  changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }

  navigateToIncidents(){
    this.navCtrl.push('IncidentsPage');
  }

  navigateToMyTasks(){
    this.navCtrl.push('MyTasksTabPage');
  }
}
