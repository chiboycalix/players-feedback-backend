import Joi from 'joi';

class JoiValidation {
  constructor(username, email, password, avatar) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatar = avatar;
  }

  static signupSchema = () => {
    return Joi.object({
      username: Joi.string().min(3).max(15).required(),
      password: Joi.string().required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      avatar: Joi.string()
    });
  };
}

module.exports = JoiValidation
