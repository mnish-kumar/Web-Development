const server = require('express');
const connectToDB = require('./src/database/db');
const noteModel = require('./src/models/note.model')

const app = server();
connectToDB();



// ---Middleware---
app.use(server.json());



app.post('/notes',async (req, res) => {
    const {title, content} = req.body;

    await noteModel.create({
        title, content
    })

    res.json({
        message: "Note created succesfully..."
    })
})

app.get('/notes', async (req, res) =>{
    const notes = await noteModel.find();

    res.json({
        message: "Notes fetch successfully...",
        notes
    })
})




app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})