const express = require('express');
const router = express.Router();

// ---Middleware of router between API---
router.use((req, res, next) => {
    console.log("Middleware of router");
    next();
});

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to cohort..."
    })
})


module.exports = router;