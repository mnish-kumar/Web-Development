const express= require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


/*Notes => title & description */

let notes = []

app.post('/notes', (req, res) =>{
    notes.push(req.body);
    res.json({
        message: 'Note added successfully',
        notes: notes
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})