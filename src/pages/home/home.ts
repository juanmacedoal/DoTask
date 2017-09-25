import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private todos:any[] = [];
  item:any=[];
  localDate:any; 
  

  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController) {
    //this.getLocal();
   this.localDate = new Date().toISOString();
   this.todos = [{ chore: 'hola', description: 'a', note: 'aaa', localDate: [new Date().toISOString()], localDateAlarm: [new Date().toISOString()], mail: 'aaa'},
                 { chore: 'hola', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa'},
                 { chore: 'hola', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa'},];
  }


  getLocal(){
    this.nativeStorage.getItem('todos').then((d)=>{
     console.log('getting native storage dataaaaaa',d);
     this.todos = Array.of(d);
     console.log('getting ==', this.todos);
     
   },(e)=>{
     console.log('getting error',e);
   
   })
   }

}

