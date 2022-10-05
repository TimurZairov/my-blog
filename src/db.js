import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx =>{
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, url TEXT, body TEXT, favorite INT)',
                    [],
                    resolve,
                    (_, error) => { reject(error)}
                )
            })
        })
    }
    //создаем запросы на все посты
    static getPosts() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => { reject(error)}
                )
            })
        })
    }

    static createPost ({title, url, body, favorite}) {
        return new Promise((resolve, reject) => {
            console.log(resolve)
            db.transaction((tx => {
                tx.executeSql(
                    'INSERT INTO posts SET title = ?, url = ?, body = ?, favorite = ? )',
                    [title, url, body, favorite],
                    (_, result) => resolve(result.insertId),
                    (_, error) => { reject(error)}
                )
            }))
        })
    }
}