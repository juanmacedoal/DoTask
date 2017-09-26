import { Component, Input } from '@angular/core';
import { NavParams, Platform, ViewController, NavController, ModalController } from 'ionic-angular';
import { MyModal } from '../addchore/add';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @Input() count: any = 0;

  selectedItem: any;

  one: any[] = [];
  todos: any[] = [];
  date: any[] = [];
  date2: any[] = [];
  date3: any[] = [];
  date4: any[] = [];
  date5: any[] = [];

  localDate: any;
  todayDate: any;
  tomorrowDate: any;
  tomorrowDate2: any;
  tomorrowDate3: any;
  tomorrowDate4: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, ) {

    this.assign();
    this.fillArrays();
    console.log(this.todos);
    console.log(this.todayDate);
    console.log(this.tomorrowDate);
    console.log(this.tomorrowDate2);
    console.log(this.tomorrowDate3);

  }

  assign(){

    this.todayDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate = (new Date().getDate() + 1).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate2 = (new Date().getDate() + 2).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate3 = (new Date().getDate() + 3).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate4 = (new Date().getDate() + 4).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();

    this.todos = [
    {chore: 'hola1', description: 'a3', note: 'aaa', localDate: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(),
      localDateAlarm: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(), mail: 'aaa'},
    { chore: 'vaya2', description: 'a1', note: 's', localDate: '27/9/2017', localDateAlarm: '27/9/2017', mail: 'aaa' },
    { chore: 'vaya5', description: 'a534', note: '43s', localDate: '27/9/2017', localDateAlarm: '27/9/2017', mail: 'aaa' },
    { chore: 'vaya8', description: 'a1', note: 's', localDate: '27/9/2017', localDateAlarm: '27/9/2017', mail: 'aaa' },
    { chore: 'hola3', description: 'a2', note: 'a', localDate: '4/10/2017', localDateAlarm: '4/10/2017', mail: 'aaa' }];

  }


  fillArrays() {
    console.log('antes del for' + this.todos.find(x => x.localDateAlarm === this.todayDate));
    var i = 0, j = 0, k = 0, l = 0;

    while (this.todos.length > this.count) {
      this.todos[this.count].localDateAlarm 
      if (this.todos[this.count].localDateAlarm == this.todayDate) {
        this.date[i] = this.todos.find(x => x.localDateAlarm === this.todayDate);
        console.log('If date 1 cont: ' + this.count + this.date);
        console.log(this.date);
        i++;
      }
      if (this.todos[this.count].localDateAlarm== this.tomorrowDate) {
        this.date2[j] = this.todos.find(x => x.localDateAlarm === this.tomorrowDate);
        console.log('If date 2 cont: ' + this.count+ this.date2);
        console.log(this.date2);
        j++;
      }
      if (this.todos[this.count].localDateAlarm== this.tomorrowDate2) {
        this.date3[k] = this.todos.find(x => x.localDateAlarm === this.tomorrowDate2);
        console.log('If date 3 ' + this.date3);
        k++;
      }
      if (this.todos[this.count].localDateAlarm== this.tomorrowDate3) {
        this.date4 = this.todos.find(x => x.localDateAlarm === this.tomorrowDate3);
        console.log('If date 4 ' + this.date4);
      }
      if (this.todos[this.count].localDateAlarm == this.tomorrowDate4) {
        this.date5 = this.todos.find(x => x.localDateAlarm === this.tomorrowDate4);
        console.log('If date 5 ' + this.date5);
     }
     
     this.count++;
    }
   
  }

  viewChore(chore) {
    console.log('Chore: ' + chore); this.one = this.todos.find(x => x.chore === chore);
    console.log('Find the chore complete: ' + this.todos.find(x => x.chore === chore));
    console.log(this.todos.find(x => x.chore === chore));
    if (this.todos.find(x => x.chore === chore)) {
      console.log('Entra en el if de lista ' + this.todos.find(x => x.chore === chore));
      this.one = this.todos.find(x => x.chore === chore);

    }

    let modal = this.modalCtrl.create(MyModal, { chore: this.todos.find(x => x.chore === chore) });
    modal.present();
  }

}



