/**
 * Created by jayde on 12/26/2016.
 * @module cont
 */

import Bottle from 'bottlejs'
import {_} from 'underscore'
import * as decorators from 'core-decorators'
import helper from './helper'
import firebase from './firebase'
import Storage from 'dom-storage'

const bottle = new Bottle()

const currentContext = (function currentContext(root) {
  return function() {
    if (typeof(root) == 'undefined') {
      root.localStorage = new Storage('./db.json', { strict: false, ws: '  ' })
      root.sessionStorage = new Storage(null, { strict: true })
    }
    return root
  }
})(this)

bottle.service('root', currentContext)

bottle.constant('_', _)

bottle.constant('decorators', decorators)

bottle.constant('DataLayerHelper', helper)

bottle.constant('firebase', firebase)


bottle.service('alias', function() {
  /**
   * Alias a method while keeping the context correct, to allow for overwriting of target method.
   *
   * @param {String} name The name of the target method.
   * @return {Function} The aliased method
   * @api private
   */
  const alias = function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments)
    }
  }

  /** alias
   * @see alias */
  return alias
})

bottle.factory('localStorage', function(container) {

})

/**
 * Container with saved state objects
 * @type {Bottle.IContainer}
 */
export let container = bottle.container