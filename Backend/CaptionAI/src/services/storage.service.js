const Imagekit = require('imagekit');

var imagekit = new Imagekit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_URL_ENDPOINT,
});

function uploadFileToImagekit(file){
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file : file.buffer,
            fileName : file.originalname,
            folder : 'Caption-ai-images',
        }, (error, result) => {
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        });
    });
}

module.exports = uploadFileToImagekit;