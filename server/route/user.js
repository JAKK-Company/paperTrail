const express = require('express');
const router = express.Router();
const userConroller = require('../controller/userContoller');

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
router.post('/',
  userConroller.validateRequest,
  userConroller.createUser,
  (req, res) => {
    return res.status(200).json({
      newUser: res.locals.newUser
    });
  }
);

module.exports = router;