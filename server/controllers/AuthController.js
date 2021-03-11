class AuthController {

  static async SignUp(req, res) {

    const { username, email, password, avatar } = req.body;

    console.log(username, email, password)

    res.send({ username, email, password, avatar })
  }
}

module.exports = AuthController;