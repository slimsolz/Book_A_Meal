import jwt from 'jsonwebtoken';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';
import Model from '../models';

require('dotenv').config();

const { User } = Model;

export default class UserController {

	static signUp(request, response) {
    const {
      email, password, name, username, role
    } = request.body;

    if (!isEmail(email) || !password || !name || !role || !username) {
      return response.status(400).json({
        message: 'Enter Valid Input',
        status: 'error',
      });
    }

    User.findOne({ where: { email: email.trim().toLowerCase() } })
    .then((userExists) => {
      if (userExists) {
        return response.status(409).json({
          status: 'error',
          message: 'Account exists for that email'
        });
      }
    });

    const hash = bcrypt.hashSync(password, 10);
    User.create({
      name,
      username,
      email: email.trim().toLowerCase(),
      password: hash,
      role
    }).then((user) => {
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 * 5 });


      return response.status(201).json({
        token,
        status: 'success',
        message: 'User created and logged in',
        user: {
          id: user.id,
          email: user.email,
        },
      });
		});
  } 

   static signin(request, response) {
    const { email, password } = request.body;
    User.findOne({ where: { email: email.trim().toLowerCase() } })
      .then((user) => {
        if (!user) {
          return response.status(401).json({
            status: 'error',
            message: 'Email or Password Incorrect'
          });
        }
        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
          return response.status(401).json({
            status: 'error',
            message: 'Email or Password Incorrect'
          });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 * 5 });

        return response
        .set('Authorization', `Bearer ${token}`)
        .status(200).json({
          status: 'success',
          message: 'Logged in Successfully',
          user: {
            id: user.id,
            email: user.email,
          }
        });
      });
  }
}