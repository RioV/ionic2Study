import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Keyboard} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  controlShowHide: {};

  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(navController, navParams) {        
    this.controlShowHide = {cancelButton: false};

    window.addEventListener('native.keyboardshow', keyboardShowHandler);
    window.addEventListener('native.keyboardhide', keyboardHideHandler);

    var self = this;
    function keyboardShowHandler(e){      
      console.log('KEYBOAD SHOW');
      self.controlShowHide['cancelButton'] = true;   
    }

    function keyboardHideHandler(e){
      console.log('KEYBOAD HIDE');
      self.controlShowHide['cancelButton'] = false;
    }
  }

  invokeButtonCancel () {
    console.log('CANCEL');
    this.controlShowHide['cancelButton'] = false;
  }

  invokeButtonDone () {
    console.log('DONE');
  }
}
