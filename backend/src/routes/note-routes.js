const { Router } = require("express");
const { get } = require("mongoose");
const router = Router();

router.route('/api/users')
    .get((req, res) => res.send('Note routes'))
    .post()

router.route('/api/notes/:id')
    .get()
    .put()
    .delete()

module.exports = router;