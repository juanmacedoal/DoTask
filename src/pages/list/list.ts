import { Component, Input } from '@angular/core';
import { NavParams, Platform, ViewController, NavController, ModalController } from 'ionic-angular';
import { MyModal } from '../addchore/add';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @Input() count: any = 0;

  one: any[] = [];
  todos: any[] = [];
  today: any[] = [];
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.assign();
    this.fillArrays();
    console.log(this.todos);
    console.log(this.todayDate);
    console.log(this.tomorrowDate);
    console.log(this.tomorrowDate2);
    console.log(this.tomorrowDate3);

  }

  assign(){

    console.log('Assign vars')

    this.todayDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate = (new Date().getDate() + 1).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate2 = (new Date().getDate() + 2).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate3 = (new Date().getDate() + 3).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.tomorrowDate4 = (new Date().getDate() + 4).toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();
    this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString();

    this.todos = [
    {chore: 'hola1', description: 'a3', note: 'aaa', localDateAlarm: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString(), mail: 'aaa'},
    { chore: 'vaya2', description: 'a1', note: 's', localDateAlarm: '28/9/2017', mail: 'aaa' },
    { chore: 'vaya5', description: 'a534', note: '43s', localDateAlarm: '28/9/2017', mail: 'aaa' },
    { chore: 'vaya8', description: 'a1', note: 's', localDateAlarm: '30/9/2017', mail: 'aaa' },
    { chore: 'hola3', description: 'a2', note: 'a', localDateAlarm: '29/9/2017', mail: 'aaa' }];

  }


  fillArrays() {

    console.log('Fill arrays')
    var i = 0, j = 0, k = 0, l = 0, m = 0, count = 0;

    while (this.todos.length > count) {
       
      if (this.todos[count].localDateAlarm == this.todayDate) {
        this.today[i] = this.todos[count];
        console.log('If date 1 cont: ' + count);
        console.log(this.today);
        i++;
      }
      if (this.todos[count].localDateAlarm == this.tomorrowDate) {
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
     }
     
     count++;
    }
   
  }

  viewChore(chore) {

    console.log('View chore');
    console.log('Find the chore complete: ' + this.todos.find(x => x.chore === chore));

    if (this.todos.find(x => x.chore === chore)) {
     
      console.log('Entra en el if de lista ' + this.todos.find(x => x.chore === chore));
      this.one = this.todos.find(x => x.chore === chore);

    }

    let modal = this.modalCtrl.create(MyModal, { chore: this.todos.find(x => x.chore === chore) });
    modal.present();
  }

}



