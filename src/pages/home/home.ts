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
  thereis = 0;


  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, ) {

    this.assign();

    console.log(this.todos);
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadTask();
      }
    })

  }

  loadTask() {
    this.databaseprovider.getAlltask().then(data => {
      this.todos = data;
      console.log(data);
    })
  }

  assign() {

    console.log('Assign vars')

    this.todayDate = new Date().getFullYear().toString() + '-0' + (new Date().getMonth() + 1).toString() + '-' + new Date().getDate().toString();
    this.tomorrowDate = (new Date().getDate() + 1).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();

    console.log("Today: " + this.todayDate);
    this.todos = [
      { chore: 'hola1', description: 'a3', note: 'aaa', localDateAlarm: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(), mail: 'aaa' },
      { chore: 'vaya2', description: 'a1', note: 's', localDateAlarm: '28/9/2017', mail: 'aaa' },
      { chore: 'vaya5', description: 'a534', note: '43s', localDateAlarm: '28/9/2017', mail: 'aaa' },
      { chore: 'vaya8', description: 'a1', note: 's', localDateAlarm: '30/9/2017', mail: 'aaa' },
      { chore: 'hola3', description: 'a2', note: 'a', localDateAlarm: '29/10/2017', mail: 'aaa' }];

  }

  fillArrays() {
    
        console.log('Fill arrays')
        var i = 0, j = 0, k = 0, l = 0, m = 0, count = 0;
    
        while (this.todos.length > count) {
           
          if (this.todos[count].localDateAlarm == this.todayDate) {
            this.thereis = 1;
            console.log('If date 1 cont: ' + count);
            console.log(this.todos[count]);
            i++;
          }
         /* if (this.todos[count].localDateAlarm == this.tomorrowDate) {
            this.date2[j] = this.todos[count];
            console.log('If date 2 cont: ' + count);
            console.log(this.date2);
            j++;
          }
          if (this.todos[count].localDateAlarm == this.tomorrowDate2) {
            this.date3[k] = this.todos[count];
            console.log('If date 3 cont: ' + this.date3);
            console.log(this.date3);
            k++;
          }
          if (this.todos[count].localDateAlarm == this.tomorrowDate3) {
            this.date4[l] = this.todos[count];
            console.log('If date 4 cont: ' + this.date4);
            console.log(this.date4);
            l++;
    
          }
          if (this.todos[count].localDateAlarm == this.tomorrowDate4) {
            this.date5[m] = this.todos[count];
            console.log('If date 5 ' + this.date5);
            console.log(this.date5);
            m++;
         }*/
         
         count++;
        }
       
      }


}

