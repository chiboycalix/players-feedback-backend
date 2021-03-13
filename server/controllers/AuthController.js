import JoiValidation from '../middleware/joi'

class AuthController {

  static async SignUp(req, res) {
    const { username, email, password, avatar } = req.body;
    const joiValidation = new JoiValidation(username, email, password, avatar);

    const { error, value } = joiValidation
      .signupSchema({ username, email, password, avatar })
      .validate({ username, email, password, avatar });

    res.send({ username, email, password, avatar })
  }
}

module.exports = AuthController;