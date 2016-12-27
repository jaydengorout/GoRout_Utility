/**
 * Created by jayde on 12/26/2016.
 *
 */

import * as _firebase from 'firebase'
import {firebase as config} from './config'
import Bottle from 'bottlejs'

/**
 *
 * @param fb
 * @param conf
 * @returns {!firebase.app.App|*|firebase.app.App}
 */
let firebaseService = function(fb, conf) {
  return fb.initializeApp(conf)
}
/**
 *
 * @param fb
 * @returns {*|firebase.database.Database|!firebase.database.Database}
 */
let databaseService = function(fb) {
  return fb.database()
}
/**
 *
 * @param fb {firebase.app.App}
 * @returns {!firebase.auth.Auth}
 */
let authService = function(fb) {
  return fb.auth()
}


/**
 * @const
 * @type {Bottle}
 */
const bottle = new Bottle('firebase')
bottle.constant('_firebase', _firebase)
bottle.service('firebase', firebaseService, '_firebase', 'config')
bottle.service('database', databaseService, 'firebase')
bottle.service('auth', authService, 'firebase')
bottle.digest()

export default bottle.container