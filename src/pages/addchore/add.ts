import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class MyModal {

    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private nav: NavController, private viewCtrl: ViewController, public alertctrl: AlertController) {
        this.myForm = formBuilder.group({
            'chore': [''],
            'description': [''],
            'date': ['', ]
            }
        );
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
