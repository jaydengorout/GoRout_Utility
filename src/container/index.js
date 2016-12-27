'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = undefined;

var _bottlejs = require('bottlejs');

var _bottlejs2 = _interopRequireDefault(_bottlejs);

var _underscore = require('underscore');

var _coreDecorators = require('core-decorators');

var decorators = _interopRequireWildcard(_coreDecorators);

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

var _firebase = require('./firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _domStorage = require('dom-storage');

var _domStorage2 = _interopRequireDefault(_domStorage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jayde on 12/26/2016.
 * @module cont
 */

var bottle = new _bottlejs2.default();

var currentContext = function currentContext(root) {
  return function () {
    if (typeof root == 'undefined') {
      root.localStorage = new _domStorage2.default('./db.json', { strict: false, ws: '  ' });
      root.sessionStorage = new _domStorage2.default(null, { strict: true });
    }
    return root;
  };
}(undefined);

bottle.service('root', currentContext);

bottle.constant('_', _underscore._);

bottle.constant('decorators', decorators);

bottle.constant('DataLayerHelper', _helper2.default);

bottle.constant('firebase', _firebase2.default);

bottle.service('alias', function () {
  /**
   * Alias a method while keeping the context correct, to allow for overwriting of target method.
   *
   * @param {String} name The name of the target method.
   * @return {Function} The aliased method
   * @api private
   */
  var alias = function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments);
    };
  };

  /** alias
   * @see alias */
  return alias;
});

bottle.factory('localStorage', function (container) {});

/**
 * Container with saved state objects
 * @type {Bottle.IContainer}
 */
var container = exports.container = bottle.container;
//# sourceMappingURL=index.js.map