'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSync = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = require('wolfy87-eventemitter');

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _copykitten = require('./../../node_modules/copykitten/copykitten');

var _copykitten2 = _interopRequireDefault(_copykitten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jayde on 12/26/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var syncData = function syncData(name) {
  "use strict";

  window.localStorage.setItem(name, JSON.stringify(privateData()));
};

var privateData = function () {
  var data = {};

  return function privateData() {
    return data;
  };
}();

var copyOfData = function copyOfData() {
  var data = (0, _copykitten2.default)(privateData());

  return data;
};

var DataSync = exports.DataSync = function (_EventEmitter) {
  _inherits(DataSync, _EventEmitter);

  function DataSync(name) {
    _classCallCheck(this, DataSync);

    var _this = _possibleConstructorReturn(this, (DataSync.__proto__ || Object.getPrototypeOf(DataSync)).call(this));

    _this.name = name;
    return _this;
  }

  _createClass(DataSync, [{
    key: 'sync',
    value: function sync() {
      syncData(this.name);
      this.emit('updated');
    }
  }, {
    key: 'getData',
    value: function getData() {
      return copyOfData();
    }
  }]);

  return DataSync;
}(_wolfy87Eventemitter2.default);
//# sourceMappingURL=DataSync.js.map