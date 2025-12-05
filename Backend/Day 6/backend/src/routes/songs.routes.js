const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFileToImageKit = require('../service/storage.service');
const songModel = require('../models/songs.model');
const Song = require('../models/songs.model');


// Temporary storage configuration for multer
const upload = multer({ storage:multer.memoryStorage()});


/*
    title: String,
    artist: String,
    audio: String (URL)
*/



// Define your song-related routes here
router.post('/songs', upload.single('audio'), async (req, res) => {
    // Logic to add a new song
    
    // console.log(req.body);
    // console.log(req.file);
    
    const fileData = await uploadFileToImageKit(req.file);
    
    const song = await songModel.create({
        title: req.body.title,
        artist: req.body.artist,
        audio: fileData.url,
        mood: req.body.mood,
    })
    
    res.status(201).json({ 
        message: 'Song added successfully',
        song: song
    });
});


// According to the mood give song
router.get('/songs', async (req, res) =>{
    const {mood} = req.query;

    const songs = await songModel.find({
        mood : mood,
    })

    res.status(200).json({
        message: "Song fetch successfully...",
        songs,
    })
})


module.exports = router;