const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');
const { createPostController } = require('../controllers/post.controller');


const upload = multer({
    storage: multer.memoryStorage(),
});


/* POST /api/posts -> multipart/form-data { image }, (Protected API) = req.cookies.token */
router.post('/', 
    authMiddleware, 
    upload.single('image'),
    createPostController // req.user = userData
);


module.exports = router;