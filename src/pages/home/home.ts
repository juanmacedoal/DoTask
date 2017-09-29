import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database';

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


  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider,) {
 
    this.assign();

    console.log(this.todos);
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadTask();
      }
    })

}

loadTask(){
  this.databaseprovider.getAlltask().then(data => {
    this.todos = data;
    console.log(data);
  })
}

  assign(){
    
        console.log('Assign vars')
    
        this.todayDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
        this.tomorrowDate = (new Date().getDate() + 1).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
        this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    
        this.todos = [
        {chore: 'hola1', description: 'a3', note: 'aaa', localDateAlarm: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(), mail: 'aaa'},
        { chore: 'vaya2', description: 'a1', note: 's',  localDateAlarm: '28/9/2017', mail: 'aaa' },
        { chore: 'vaya5', description: 'a534', note: '43s',  localDateAlarm: '28/9/2017', mail: 'aaa' },
        { chore: 'vaya8', description: 'a1', note: 's',  localDateAlarm: '30/9/2017', mail: 'aaa' },
        { chore: 'hola3', description: 'a2', note: 'a',  localDateAlarm: '29/10/2017', mail: 'aaa' }];
    
      }


  getLocal() {

  }

}

