import { Component, Input } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerModule } from 'datepicker-ionic2';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
    selector: 'page-add',
    templateUrl: 'add.html',
})
export class MyModal {

    myForm: FormGroup;
    chore: any;
    add: any;
    edit: any;
    description: any;
    note: any;
    localDate: any;
    localDateAlarm: any;
    mail: any;
    min: string = '';
    max: any;
    items: any;
    todos = {
        chore: '',
        description: '',
        note: '',
        localDate: '',
        localDateAlarm: '',
        mail: ''
    };

    constructor(private nativeStorage: NativeStorage, private formBuilder: FormBuilder, params: NavParams,
        private nav: NavController, private viewCtrl: ViewController, public alertctrl: AlertController) {
        console.log('hola add: ' + params.get('chore'));
        this.todos = params.get('chore');

        if (this.todos.chore != '') {
            this.edit = 1;
            this.chore = this.todos.chore;
            this.description = this.todos.description;
            this.note = this.todos.note;
            this.localDate = this.todos.localDate.toString();
            this.localDateAlarm = this.todos.localDateAlarm.toString();
            this.mail = this.todos.mail;
          }
          if (this.todos.chore == '') {
            this.add = 1;
            this.chore = '';
            this.description = '';
            this.note = '';
            this.localDate = '';
            this.localDateAlarm = '';
            this.mail = '';
          }      

        this.myForm = formBuilder.group({
            chore: [''],
            description: [''],
            note: [''],
            localDate: [new Date().toISOString()],
            localDateAlarm: [''],
            mail: ['']
        }
        );
        let today = new Date();
        let oneWeek = new Date();
        this.min = today.toISOString();
        this.max = 31 - 12 - 2020;
        this.localDate = new Date();
    }

    closeMe() {
        let confirm = this.alertctrl.create({
            title: 'Sure?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.viewCtrl.dismiss();

                        this.nativeStorage.setItem('todos', this.todos).then((d) => {
                            console.log('storage save', d);


                        }, (e) => {
                            console.log('unable to save', e);

                        })


                    }
                },
                {
                    text: 'No'
                }
            ]
        });

        confirm.present();
    }



}
