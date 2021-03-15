import JoiValidation from '../middleware/joi';
import requestHandler from '../utils/requestHandler'

class AuthController {
  static async SignUp(req, res) {
    const { username, email, password, avatar } = req.body;

    const { error, value } = JoiValidation
      .signupSchema({ username, email, password, avatar })
      .validate({ username, email, password, avatar });

    requestHandler.validateJoi(error)

    res.send({ username, email, password, avatar });
  }
}

module.exports = AuthController;
