const { Router } = require("express");
const router = Router();

router.route('/api/users')
    .get((req, res) => res.send('User routes'))
    .post()

router.route('/api/users/:id')
    .get()
    .put()
    .delete()

module.exports = router;