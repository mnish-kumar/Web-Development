// use imagekit for cloud storage provider
const ImageKit = require('imagekit');


var imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_URL_ENDPOINT
})


function uploadFileToImageKit (file){
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file : file.buffer,
            fileName : file.originalname,
            folder: 'moody-player-audio'
        }, (error, result) => {
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        });
    });
}


module.exports = uploadFileToImageKit;