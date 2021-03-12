import Joi from 'joi'

class AuthController {

  static async SignUp(req, res) {

    const { username, email, password, avatar } = req.body;
    const schema = {
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    };

    const { error } = Joi.valid({ email, username, password }, schema);

    console.log(error)

    res.send({ username, email, password, avatar })
  }
}

module.exports = AuthController;