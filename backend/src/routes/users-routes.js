const { Router } = require("express");
const router = Router();

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users-controller');

router
  .route("/api/users")
  .get(getUsers)
  .post(createUser);

router.route('/api/users/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;