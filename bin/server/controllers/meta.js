'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {

  router.get('/meta/:metaId', function (ctx) {
    var metaId = ctx.params.metaId;

    var pageInfo = {
      title: '元数据',
      keyword: '',
      description: ''
    };

    var mock = require('../../data/viewmodel');

    ctx.store.dispatch({
      type: _meta.ACTION_FETCH_METADATA_SUCCESS,
      payload: {
        viewApplication: mock.data.viewApplication,
        viewmodel: mock.data.viewmodel
      }
    });

    ctx.render(pageInfo);
  });

  return router;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meta = require('../../common/redux/modules/meta');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }