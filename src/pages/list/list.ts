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
    
    this.todayDate = new Date().toDateString();
    this.localDate = new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString() + '/' + new Date().getFullYear().toString()  ;
    this.tomorrowDate = new Date().toISOString();

    this.todos = [{ chore: 'hola1', description: 'a3', note: 'aaa', localDate: [new Date().toDateString()], localDateAlarm: [new Date().toDateString()], mail: 'aaa' },
    { chore: 'vaya2', description: 'a1', note: 's', localDate: '4/10/17', localDateAlarm: '4/10/17', mail: 'aaa' },
    { chore: 'hola3', description: 'a2', note: 'a', localDate: '4/10/17', localDateAlarm: '4/10/17', mail: 'aaa' }];
    console.log(this.todos);
    console.log(this.todayDate);
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



