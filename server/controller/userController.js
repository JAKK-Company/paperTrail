// const { models } = require('mongoose');
const { User, Category, Item } = require('./models');

const userController = {};

userController.validateRequest = (req, res, next) => {
  if (!req.body.email || !req.body.password  || typeof req.body.email !== 'string' || typeof req.body.password !== 'string') {
    return next({
      err: 'Invalid request'
    });
  }
  return next();
}

userController.getUser = (req, res, next) => {
  const queryObj = {
    email: req.body.email,
    password: req.body.password
  };

  User.findOne(queryObj).exec()
    .then(result => {
      console.log('Looking for user result => ', result);
      res.locals.user = result;
      return next();
    })
    .catch(error => next({
      err: `Error looking for user in db: ${err}`
    }));

}


module.exports = userController;