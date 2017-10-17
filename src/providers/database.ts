import { Injectable, forwardRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DatabaseProvider {
    sqlite: SQLite ;
    database: SQLiteObject;

    private databaseReady: BehaviorSubject<boolean>;


    constructor() {
        this.databaseReady = new BehaviorSubject(false);
        this.createDB();

    }


    createDB() {
  
            this.sqlite = new SQLite();
            this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then((db: SQLiteObject) => {

                    this.database = db;
                    this.database.executeSql('create table if not exists ' 
                    + 'task(ready INTEGER, chore VARCHAR(32), description VARCHAR(32), note VARCHAR(32), mail VARCHAR(32), alarm VARCHAR(32))', {})
                        .then(() => console.log('Executed SQL'))
                        .catch(e => console.log(e));
                        this.databaseReady.next(true);

                }).catch(e => console.log(e));


    }


    addtask(chore, description, note, mail, localDateAlarm) {
        let sql = 'INSERT INTO task(ready, chore, description, note, mail, alarm) VALUES(?,?,?,?,?,?)';
        console.log("Insert " + chore + ' ' + description + ' ' + note + ' ' + mail + ' ' + localDateAlarm);
       
        this.database.executeSql(sql, [0, chore, description, note, mail, localDateAlarm])
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
                    console.log(data.rows.item(i).localDateAlarm);
                    todos.push({
                        chore: data.rows.item(i).chore, description: data.rows.item(i).description, note: data.rows.item(i).note, 
                        mail: data.rows.item(i).mail, localDateAlarm: data.rows.item(i).alarm, ready: data.rows.item(i).ready
                    });
                }
            }
            console.log(todos);
            return todos;
        }, err => {
            console.log('Error: ', err);
            return [];
        });
    }

    editTask(chore) {
        let sql = 'UPDATE category SET  description = ?, note = ?, mail = ?, alarm = ? WHERE chore = ?';
        return this.database.executeSql(sql, 
            [chore.description, chore.note, chore.mail, chore.alarm, chore.chore]);
    }

    checkTask(chore) {
        let sql = 'UPDATE category SET  ready = ? WHERE chore = ?';
        return this.database.executeSql(sql, 
            [1, chore.chore]);
    }

    getDatabaseState() {
        return this.databaseReady.asObservable();
    }


}