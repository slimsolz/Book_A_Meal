import Model from '../models';

const { User } = Model;

export default class UserController {

	static signUp(request, response) {
    const {
      email, password, name, username, role
    } = request.body;

    if (!email || !password || !name || !role || !username) {
      return response.status(400).json({
        message: 'Enter Valid Input',
        error: true,
      });
    }

    User.findOne({ where: { email: email.trim().toLowerCase() } })
    .then((userExists) => {
      if (userExists) {
        return response.status(409).json({
          error: true,
          message: 'Account exists for that email'
        });
      }
    });

    /*const hash = bcrypt.hashSync(password, 10);*/
    User.create({
      name,
      username,
      email: email.trim().toLowerCase(),
      password,
      role
    }).then((user) => {
     /* const token = jwt.sign({ id: user.id }, process.env.SALT, { expiresIn: 86400 * 5 });*/
      return response.status(201).json({
        error: false,
        message: 'User created and logged in',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
		});
  } 

   static signin(request, response) {
    const { email, password } = request.body;
    console.log(email + ' ' + password);
    
    User.findOne({ where: { email: email.trim().toLowerCase() } })
      .then((user) => {
        if (!user) {
          return response.status(401).json({
            error: true,
            message: 'Email or Password Incorrect'
          });
        }
       /* const correctPassword = bcrypt.compareSync(password, user.password);*/
   /*     if (!correctPassword) {
          return response.status(401).json({
            error: true,
            message: 'Email or Password Incorrect'
          });
        }
        const token = jwt.sign({ id: user.id }, process.env.SALT, { expiresIn: 86400 * 5 });
*/
        return response.status(200).json({
          error: false,
          message: 'Logged in Successfully',
          user: {
            id: user.id,
            email: user.email,
          }
        });
      });
  }
}