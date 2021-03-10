"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _connection = require("./database/connection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.use(_express["default"].json());
app.use(_routes["default"]);
app.listen(PORT, function () {
  console.log("App listening on port ".concat(PORT));
  (0, _connection.connect)();
});
module.exports = app;