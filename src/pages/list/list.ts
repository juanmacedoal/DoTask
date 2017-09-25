import { Component, Input } from '@angular/core';
import { NavParams, Platform, ViewController, NavController, ModalController } from 'ionic-angular';
import { MyModal } from '../addchore/add';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  todos: any[] = [];
  one: any[] = [];
  localDate: any;
  todayDate: any;
  tomorrowDate: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, ) {
    this.selectedItem = navParams.get('item');

    this.todayDate = new Date().toISOString() 
    this.localDate = new Date().getDate().toString() + '/' + new Date().getMonth().toString() + '/' + new Date().getFullYear().toString()  ;
    this.tomorrowDate = new Date().toISOString();

    this.todos = [{ chore: 'hola', description: 'a', note: 'aaa', localDate: [new Date().toISOString()], localDateAlarm: [new Date().toISOString()], mail: 'aaa' },
    { chore: 'vaya', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa' },
    { chore: 'hola', description: 'a', note: 'aaa', localDate: '', localDateAlarm: '', mail: 'aaa' }];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  viewChore(chore) {
    console.log('Chore: ' + chore); this.one = this.todos.find(x => x.chore === chore);
    console.log('Find the chore complete: ' + this.todos.find(x => x.chore === chore));
    console.log(this.todos.find(x => x.chore === chore));
    if (this.todos.find(x => x.chore === chore)) {
      console.log('Entra en el if de lista ' + this.todos.find(x => x.chore === chore));  
      this.one = this.todos.find(x => x.chore === chore);

    }

    let modal = this.modalCtrl.create(MyModal,  {chore: this.todos.find(x => x.chore === chore)});
    modal.present();
  }

}



