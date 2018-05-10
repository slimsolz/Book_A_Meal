import jwt from 'jsonwebtoken';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';
import Model from '../models';

require('dotenv').config();

const { User } = Model;

export default class UserController {

	static signUp(req, res) {
    const {
      email, password, name, username, role
    } = req.body;

    if (!isEmail(email) || !password || !name || !role || !username) {
      return res.status(400).json({
        message: 'All fields are required',
        status: 'error',
      });
    }

    User.findOne({ where: { email: email.trim().toLowerCase() } })
    .then((userExists) => {
      if (userExists) {
        return res.status(409).json({
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
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '24h' });
      return res.status(201).json({
        token,
        status: 'success',
        message: 'User created and logged in',
        user: {
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role
        },
      });
		});
  } 

   static signin(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email: email.trim().toLowerCase() } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            status: 'error',
            message: 'Email or Password Incorrect'
          });
        }
        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
          return res.status(401).json({
            status: 'error',
            message: 'Email or Password Incorrect'
          });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '24h' });

        return res.set('Authorization', `Bearer ${token}`)
        .status(200).json({
          token,
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