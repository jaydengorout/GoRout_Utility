'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase2 = require('firebase');

var _firebase = _interopRequireWildcard(_firebase2);

var _config = require('./config');

var _bottlejs = require('bottlejs');

var _bottlejs2 = _interopRequireDefault(_bottlejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @param fb
 * @param conf
 * @returns {!firebase.app.App|*|firebase.app.App}
 */
var firebaseService = function firebaseService(fb, conf) {
  return fb.initializeApp(conf);
};
/**
 *
 * @param fb
 * @returns {*|firebase.database.Database|!firebase.database.Database}
 */
/**
 * Created by jayde on 12/26/2016.
 *
 */

var databaseService = function databaseService(fb) {
  return fb.database();
};
/**
 *
 * @param fb {firebase.app.App}
 * @returns {!firebase.auth.Auth}
 */
var authService = function authService(fb) {
  return fb.auth();
};

/**
 * @const
 * @type {Bottle}
 */
var bottle = new _bottlejs2.default('firebase');
bottle.constant('_firebase', _firebase);
bottle.service('firebase', firebaseService, '_firebase', 'config');
bottle.service('database', databaseService, 'firebase');
bottle.service('auth', authService, 'firebase');
bottle.digest();

exports.default = bottle.container;
//# sourceMappingURL=firebase.js.map