const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// TODO: Add PUT and DELETE user routes

// TODO: Add POST and DELETE routes for friends

module.exports = router;
