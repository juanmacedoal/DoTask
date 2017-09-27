import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private todos: any[] = [];
  item: any = [];
  localDate: any;
  todayDate: any;
  tomorrowDate: any;


  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController) {
 
    this.todayDate = new Date().toISOString() 
    this.localDate = new Date().getDate().toString() + '/' + new Date().getMonth().toString() + '/' + new Date().getFullYear().toString()  ;
    this.tomorrowDate = new Date().toISOString();
    this.todos = [
    { chore: 'hola', description: 'a', note: 'aaa', localDate: [new Date().toISOString()], localDateAlarm: [new Date().toISOString()], mail: 'aaa' },
    { chore: 'hola', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa' },
    { chore: 'hola', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa' }
    ];

    console.log(this.todos);
  }


  getLocal() {
    this.nativeStorage.getItem('todos').then((d) => {
      console.log('getting native storage dataaaaaa', d);
      this.todos = Array.of(d);
      console.log('getting ==', this.todos);

    }, (e) => {
      console.log('getting error', e);

    })
  }

}

