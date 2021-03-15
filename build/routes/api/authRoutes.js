'use strict';

var _express = _interopRequireDefault(require('express'));

var _AuthController = _interopRequireDefault(require('../../controllers/AuthController'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}

var router = _express['default'].Router();

router.post('/signUp', _AuthController['default'].SignUp);
module.exports = router;
