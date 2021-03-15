'use strict';

var _express = _interopRequireDefault(require('express'));

var _authRoutes = _interopRequireDefault(require('./authRoutes'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}

var router = _express['default'].Router();

router.use('/', _authRoutes['default']);
module.exports = router;
