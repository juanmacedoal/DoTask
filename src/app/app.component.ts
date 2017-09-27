import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ViewController, NavController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { MyModal } from '../pages/addchore/add';
import { ConfigPage } from '../pages/config/config';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController

  todos = {
    chore: '',
    description: '',
    note: '',
    localDate: '',
    localDateAlarm: '',
    mail: ''
  };
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public modalCtrl: ModalController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tasks', component: ListPage },
      { title: 'Config', component: ConfigPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  addChore(){
    let modal = this.modalCtrl.create(MyModal, {chore: this.todos});

        modal.present();
  }
}
