const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// GET 
router.get('/',
  userController.validateRequest,
  userController.getUser,
  (req, res) => {
    return res.status(200).json({
      user: res.locals.user
    });
  }
);


// POST 
// router.post('/',
//   userController.validateRequest,
//   userController.createUser,
//   (req, res) => {
//     return res.status(200).json({
//       newUser: res.locals.newUser
//     });
//   }
// );

module.exports = router;