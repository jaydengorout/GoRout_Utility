'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebase = require('firebase');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authentication = function (_auth) {
  _inherits(Authentication, _auth);

  function Authentication() {
    _classCallCheck(this, Authentication);

    return _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this));
  }

  _createClass(Authentication, [{
    key: 'createUser',
    value: function createUser(email) {
      this.createUserWithEmailAndPassword(email, 'pass');
    }
  }, {
    key: 'signIn',
    value: function signIn() {
      this.signInWithPopup(this.providers.Google).catch();
    }
  }, {
    key: 'onAuthStateChanged',
    value: function onAuthStateChanged(cb) {
      firebase.onAuthStateChanged(cb);
    }
  }], [{
    key: 'GoogleAuth',
    value: function GoogleAuth() {
      var credential = new _firebase.auth.GoogleAuthProvider();
      credential.addScope('https://www.googleapis.com/auth/plus.login');
      return credential;
    }
  }]);

  return Authentication;
}(_firebase.auth);
//# sourceMappingURL=Auth.js.map