/**
 * Created by jayde on 12/26/2016.
 * @name config
 * @description Object holding basic configuration
 */

/**
 * Firebase Config
 * @type {{apiKey: string, authDomain: string, databaseURL: string, storageBucket: string, messagingSenderId: string}}
 */
export const firebase = {
  apiKey: 'AIzaSyBJPy40vz0TyFN9mo8lrAsimJnnWosIagU',
  authDomain: 'sales-e6fff.firebaseapp.com',
  databaseURL: 'https://sales-e6fff.firebaseio.com',
  storageBucket: 'sales-e6fff.appspot.com',
  messagingSenderId: '632138239997'
}

/**
 * Example Config setup
 * @type {{someconfig: string, andSomeMore: string}}
 */
export const example = {
  someconfig: 'someconfig',
  andSomeMore: 'even more'
}

export default {
  firebase,
  example
}