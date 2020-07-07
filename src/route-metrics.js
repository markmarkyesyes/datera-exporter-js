const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('I am alive!')
});

module.exports = router;