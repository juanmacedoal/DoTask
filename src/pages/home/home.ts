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
 
    this.assign();

    console.log(this.todos);
  }

  assign(){
    
        console.log('Assign vars')
    
        this.todayDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
        this.tomorrowDate = (new Date().getDate() + 1).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
        this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    
        this.todos = [
        {chore: 'hola1', description: 'a3', note: 'aaa', localDate: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(),
          localDateAlarm: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(), mail: 'aaa'},
        { chore: 'vaya2', description: 'a1', note: 's', localDate: '28/9/2017', localDateAlarm: '28/9/2017', mail: 'aaa' },
        { chore: 'vaya5', description: 'a534', note: '43s', localDate: '28/9/2017', localDateAlarm: '28/9/2017', mail: 'aaa' },
        { chore: 'vaya8', description: 'a1', note: 's', localDate: '30/9/2017', localDateAlarm: '30/9/2017', mail: 'aaa' },
        { chore: 'hola3', description: 'a2', note: 'a', localDate: '29/10/2017', localDateAlarm: '29/10/2017', mail: 'aaa' }];
    
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

