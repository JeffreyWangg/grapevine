const express = require("express")
const path = require('path');
const router = express.Router()

router.use(express.static(path.join(__dirname)));
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

module.exports = router;