"use strict";

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/api/v1', _api["default"]);
module.exports = router;