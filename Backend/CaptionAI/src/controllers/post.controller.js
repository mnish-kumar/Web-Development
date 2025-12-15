const postModel = require('../models/post.model');
const generateCaption = require('../services/ai.service');
const uploadFileToImagekit = require('../services/storage.service');

async function createPostController(req, res) {
    try {
        const file = req.file;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized, user not found in request.",
            });
        }

        if (!file) {
            return res.status(400).json({
                message: "Image file is required.",
            });
        }

        // 1. Upload image to ImageKit to get a public URL
        const uploadResult = await uploadFileToImagekit(file);
        const imageUrl = uploadResult.url;

        // 2. Generate caption from the raw image buffer using AI service
        const caption = await generateCaption(file.buffer, file.mimetype || "image/jpeg");
        
        // // 3. Save post in database
        // const post = await postModel.create({
        //     imageUrl,
        //     caption,
        //     user: user._id,
        // });

        return res.status(201).json({
            message: "Post created successfully.",
            caption,
            // data: post,
        });
    } catch (error) {
        console.error("Error in createPostController:", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message,
        });
    }
}

module.exports = {
    createPostController,
};