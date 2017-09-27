import { Component, Input } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerModule } from 'datepicker-ionic2';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
    selector: 'page-add',
    templateUrl: 'add.html',
})
export class MyModal {

    sqlstorage: SQLiteObject;

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

    constructor(private formBuilder: FormBuilder, params: NavParams, private sqlite: SQLite,
        private nav: NavController, private viewCtrl: ViewController, public alertctrl: AlertController) {

        console.log('hola add: ' + params.get('chore'));
        this.todos = params.get('chore');

        this.requestChore();
        this.assign(formBuilder);
        this.createDB(sqlite);

    }

    assign(formBuilder) {

        let today = new Date();
        let oneWeek = new Date();
        this.min = today.toISOString();
        this.max = 31 - 12 - 2020;
        this.localDate = new Date();

        this.myForm = formBuilder.group({
            chore: [''],
            description: [''],
            note: [''],
            localDate: [new Date().toISOString()],
            localDateAlarm: [''],
            mail: ['']
        });

    }

    requestChore() {

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

    }

    createDB(sqlite) {

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {


                db.executeSql('create table task(chore VARCHAR(32), description VARCHAR(32), note VARCHAR(32), mail VARCHAR(32), alarm CHARACTER(20)', {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));


            }).catch(e => console.log(e));

    }


    closeMe() {
        let confirm = this.alertctrl.create({
            title: 'Sure?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.viewCtrl.dismiss();

                        let sql = 'INSERT INTO task(chore, description, note, mail, alarm) VALUES(?,?,?,?,?)';

                        this.sqlstorage.executeSql(sql, [this.chore, this.description, this.note, this.mail, this.localDateAlarm])
                            .then(response => {
                                
                                console.log('save');
                                return this.sqlstorage;              
 
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
