'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = html;

var _env = require('../../../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function html(pageInfo, content, state) {
  return '\n      <html>\n        <head>\n          <meta charSet="utf-8"/>\n          <title>' + pageInfo.title + '</title>\n          <meta name="description" content=' + pageInfo.description + '/>\n          <meta name="keyword" content=' + pageInfo.keyword + '/>\n          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n          <link href="/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />\n          <link href="/styles/default/login.css" rel="stylesheet" type="text/css" />\n        </head>\n        <body>\n          <div id="container">\n            ' + content + '\n          </div>\n          <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(state) + '\n          </script>\n          <script src="' + _env2.default.scriptBaseUrl() + '/scripts/bundle.min.js"></script>\n        </body>\n      </html>\n    ';
}