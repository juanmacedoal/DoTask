import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/Rx';


export class DatabaseProvider {
    database: SQLiteObject;
    private databaseReady: BehaviorSubject<boolean>;


    constructor(private storage: Storage, private sqlite: SQLite, private platform: Platform) {

        this.createDB();

    }

    createDB() {

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {

                this.database = db;
                this.database.executeSql('create table task(chore VARCHAR(32), description VARCHAR(32), note VARCHAR(32), mail VARCHAR(32), alarm CHARACTER(20))', {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));


            }).catch(e => console.log(e));

    }


    addtask(chore, description, note, mail, localDateAlarm) {
        let sql = 'INSERT INTO task(chore, description, note, mail, alarm) VALUES(?,?,?,?,?)';

        this.database.executeSql(sql, [chore, description, note, mail, localDateAlarm])
            .then(response => {

                console.log('save');
                return this.database;

            }, (e) => {

                console.log('unable to save', e);

            })
    }

    getAlltask() {
        return this.database.executeSql("SELECT * FROM task", []).then((data) => {
            let todos = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    todos.push({ chore: data.rows.item(i).chore, description: data.rows.item(i).description, note: data.rows.item(i).note, mail: data.rows.item(i).mail
                        , localDateAlarm: data.rows.item(i).localDateAlarm });
                }
            }
            return todos;
        }, err => {
            console.log('Error: ', err);
            return [];
        });
    }

    getDatabaseState() {
        return this.databaseReady.asObservable();
      }


}