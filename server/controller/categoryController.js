const { User, Item } = require('../models/models');

const categoryController = {};

// middleware function to create new User category
categoryController.addCategory = (req, res, next) => {
  if(typeof req.body.category !==  'string') return next({ err: 'Invalid request'});
  const { category } = req.body.category;

  User.category.create(category)
  .then(result => {
    console.log('Creating new category => ', result);
    res.locals.newCateegory = result;
    return next();
  })
  .catch(err => next({
    err: `Err creating new category in db: ${err}` 
  }));
}






module.exports = categoryController;