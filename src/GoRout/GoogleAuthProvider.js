"use strict";

var _firebase = require("firebase");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jayden on 12/28/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var GoogleAuthProvider = function (_auth$GoogleAuthProvi) {
  _inherits(GoogleAuthProvider, _auth$GoogleAuthProvi);

  function GoogleAuthProvider() {
    _classCallCheck(this, GoogleAuthProvider);

    return _possibleConstructorReturn(this, (GoogleAuthProvider.__proto__ || Object.getPrototypeOf(GoogleAuthProvider)).apply(this, arguments));
  }

  return GoogleAuthProvider;
}(_firebase.auth.GoogleAuthProvider);
//# sourceMappingURL=GoogleAuthProvider.js.map