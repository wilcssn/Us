import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController, public loginProvider:LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
