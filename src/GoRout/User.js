'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataSync2 = require('./DataSync');

var _utility = require('./../utility');

var utils = _interopRequireWildcard(_utility);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jayde on 12/26/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var User = function (_DataSync) {
  _inherits(User, _DataSync);

  function User() {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, 'User'));

    _this.metaRef = null;
    _this.get = null;
    _this.push = null;
    _this._firebase = window.firebase;
    return _this;
  }

  _createClass(User, [{
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      return _typeof(this._firebase.auth().currentUser) === 'object';
    }
  }, {
    key: 'isAdmin',
    value: function isAdmin(cb) {
      this._firebase.database().ref('admins').once('value', function (snapshot) {
        var data = snapshot.val();
        var e = !!data[this._firebase.auth().currentUser.uid];
        cb(e);
      }.bind(this));
    }
  }, {
    key: 'loadUser',
    value: function loadUser(user) {
      if (user) {
        this._firebase.database().ref().child('users').child(user.uid).once('value', function (snapshot) {
          var _this2 = this;

          var data = {
            displayName: user.providerData[0].displayName,
            photoURL: user.providerData[0].photoURL,
            email: user.providerData[0].email,
            meta: null
          };
          if (!snapshot.exists()) {
            data = {
              displayName: user.providerData[0].displayName,
              photoURL: user.providerData[0].photoURL,
              email: user.providerData[0].email,
              meta: null
            };
            this._firebase.database().ref().child('users').child(user.uid).set(data);
          } else {
            data = snapshot.val();
          }
          this.data = data;
          this._firebase.database().ref().child('users').child(user.uid).off();
          /**
           * setting up meta stuff
           */
          this.metaRef = this._firebase.database().ref().child('users').child(user.uid).child('meta');
          this.metaRef.off();
          var dataLayer = [data.meta];
          var helper = new DataLayerHelper(dataLayer, function (message, model) {
            _this2.metaRef.update(model);
            helper.flatten();
            _this2.data.meta = helper.a;
            _this2.sync();
            _this2.emit('updated');
          });
          this.get = function (key) {
            return helper.get(key);
          };
          this.push = function (data) {
            dataLayer.push(data);
          };
          /***********************************
           *
           */
          var onlineStatus = function (root, user) {
            var userRef = root._firebase.database().ref('users').child(user.uid);
            var onlineRef = root._firebase.database().ref('onlineUsers/' + user.uid);
            root._firebase.database().ref('/.info/connected').on('value', function (snapshot) {
              if (snapshot.exists()) {
                onlineRef.onDisconnect().remove();
                onlineRef.set({ id: user.uid, data: user.providerData[0] });
                userRef.onDisconnect().update({ online: false, lastSeen: firebase.database.ServerValue.TIMESTAMP });
                userRef.update({ online: true });
              }
            });
          }(this, user);
        }.bind(this));
      } else {
        this.emit('NotAuthenticated');
      }
    }
  }]);

  return User;
}(_DataSync2.DataSync);
//# sourceMappingURL=User.js.map