import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerModule } from 'datepicker-ionic2';
@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class MyModal {

    myForm: FormGroup;
    chore:any;
    description:any;
    note:any;
    localDate: any;
    localDateAlarm: any;
    mail:any;
    min: string = '';
    max: any;
    
    constructor(private formBuilder: FormBuilder, private nav: NavController, private viewCtrl: ViewController, public alertctrl: AlertController) {
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
        this.max = 31-12-2020;
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
