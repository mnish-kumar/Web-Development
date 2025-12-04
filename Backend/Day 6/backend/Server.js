require('dotenv').config();
const app = require('./src/app');
const connectToDatabse = require('./src/database/db');

connectToDatabse();



// app.use(app.json());



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});