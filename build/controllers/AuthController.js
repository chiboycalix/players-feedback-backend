'use strict';

var _joi = _interopRequireDefault(require('joi'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}

function _asyncToGenerator(fn) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise(function (resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
			}
			_next(undefined);
		});
	};
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

var AuthController = /*#__PURE__*/ (function () {
	function AuthController() {
		_classCallCheck(this, AuthController);
	}

	_createClass(AuthController, null, [
		{
			key: 'SignUp',
			value: (function () {
				var _SignUp = _asyncToGenerator(
					/*#__PURE__*/ regeneratorRuntime.mark(function _callee(req, res) {
						var _req$body, username, email, password, avatar, schema, _Joi$valid, error;

						return regeneratorRuntime.wrap(function _callee$(_context) {
							while (1) {
								switch ((_context.prev = _context.next)) {
									case 0:
										(_req$body = req.body),
											(username = _req$body.username),
											(email = _req$body.email),
											(password = _req$body.password),
											(avatar = _req$body.avatar);
										schema = {
											email: _joi['default'].string().email().required(),
											username: _joi['default'].string().required(),
											password: _joi['default'].string().required()
										};
										(_Joi$valid = _joi['default'].valid(
											{
												email: email,
												username: username,
												password: password
											},
											schema
										)),
											(error = _Joi$valid.error);
										console.log(error);
										res.send({
											username: username,
											email: email,
											password: password,
											avatar: avatar
										});

									case 5:
									case 'end':
										return _context.stop();
								}
							}
						}, _callee);
					})
				);

				function SignUp(_x, _x2) {
					return _SignUp.apply(this, arguments);
				}

				return SignUp;
			})()
		}
	]);

	return AuthController;
})();

module.exports = AuthController;
