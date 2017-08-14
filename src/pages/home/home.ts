import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private items: any;
  private todos = {
      chore: '',
      description: '',
      note: '',
      localDate: '',
      localDateAlarm: '',
      mail: ''
  };

  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController) {
    this.getLocal();
  }


  getLocal(){
    this.nativeStorage.getItem(this.todos.chore).then((d)=>{
     console.log('getting native storage data',d);
     this.items = d;
     
   },(e)=>{
     console.log('getting err',e);
   
   })
   }

}

