"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirebaseAdapter = undefined;

var _firebase = require("firebase");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jayden on 12/28/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * FirebaseAdapter class
 * @extends "initializeApp"
 */
var FirebaseAdapter = exports.FirebaseAdapter = function (_initializeApp) {
  _inherits(FirebaseAdapter, _initializeApp);

  function FirebaseAdapter() {
    _classCallCheck(this, FirebaseAdapter);

    return _possibleConstructorReturn(this, (FirebaseAdapter.__proto__ || Object.getPrototypeOf(FirebaseAdapter)).apply(this, arguments));
  }

  return FirebaseAdapter;
}(_firebase.initializeApp);
//# sourceMappingURL=firebaseAdapter.js.map