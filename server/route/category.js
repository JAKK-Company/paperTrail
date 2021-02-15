const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

// POST
router.post('/create',
  categoryController.addCategory,
  (req, res) => {
    return res.status(200).json({
      category: res.locals.category
    });
  }
);

module.exports = router;