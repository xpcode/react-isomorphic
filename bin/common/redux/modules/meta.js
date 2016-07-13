'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMetaData = exports.fetchMetaData_server = exports.ACTION_FETCH_METADATA_FAILURE = exports.ACTION_FETCH_METADATA_SUCCESS = exports.ACTION_FETCH_METADATA = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _urls = require('../../helpers/urls');

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var $$state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.fromJS({}) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case ACTION_FETCH_METADATA_SUCCESS:
      return $$state.merge(action.payload);

    default:
      return $$state;
  }
};

var ACTION_FETCH_METADATA = exports.ACTION_FETCH_METADATA = 'ACTION_FETCH_METADATA'; // 获取元数据
var ACTION_FETCH_METADATA_SUCCESS = exports.ACTION_FETCH_METADATA_SUCCESS = 'ACTION_FETCH_METADATA_SUCCESS';
var ACTION_FETCH_METADATA_FAILURE = exports.ACTION_FETCH_METADATA_FAILURE = 'ACTION_FETCH_METADATA_FAILURE';

var fetchMetaData_server = exports.fetchMetaData_server = function fetchMetaData_server() {
  return {
    type: ACTION_FETCH_METADATA_SUCCESS,
    payload: {
      view: require('../../../data/viewmodel'),
      viewModel: require('../../../data/viewmodel')
    }
  };
};

var fetchMetaData = exports.fetchMetaData = function fetchMetaData(metaId) {
  var _fetchMetaData = function _fetchMetaData(type, data) {
    return {
      type: type,
      payload: data
    };
  };

  return function (dispatch, getState) {
    console.log(getState());

    // fetching
    dispatch(login(ACTION_FETCH_METADATA));

    var options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        metaId: metaId
      })
    };

    (0, _isomorphicFetch2.default)(_urls2.default.USER_FETCH_METADATA, options).then(function (response) {
      console.log(response);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      console.log(json);
      dispatch(_fetchMetaData(ACTION_FETCH_METADATA_SUCCESS, json));
    });
  };
};