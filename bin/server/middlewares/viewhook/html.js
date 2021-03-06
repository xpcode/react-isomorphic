'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = html;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('../../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = process.env.NODE_ENV !== 'production' ? _env2.default.SCRIPT_BASEURL_DEV : _env2.default.SCRIPT_BASEURL_PROD;

function html(pageInfo, content, state) {
  return '\n      <html>\n        <head>\n          <meta charSet="utf-8"/>\n          <title>' + pageInfo.title + '</title>\n          <meta name="description" content=' + pageInfo.description + '/>\n          <meta name="keyword" content=' + pageInfo.keyword + '/>\n          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n          <link href="' + baseUrl + '/static/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />\n          <link href="' + baseUrl + '/static/styles/default/index.css" rel="stylesheet" type="text/css" />\n        </head>\n        <body>\n          <div id="container">\n            ' + content + '\n          </div>\n          <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(state) + '\n          </script>\n          <script src="' + baseUrl + '/static/scripts/index.min.js"></script>\n        </body>\n      </html>\n    ';
}