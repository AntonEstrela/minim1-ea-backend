import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
const app: express.Application = express();
//Import Routes
const studentsRoute = require('./routes/students');
const subjectsRoute = require('./routes/subjects');
const phonesRoute = require('./routes/phones');


const PORT = 8080;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/students', studentsRoute);
app.use('/api/subjects', subjectsRoute);
app.use('/api/phones', phonesRoute);


app.get('/', (req, res) => {
    res.send('Home');
});
// Connect to DB
mongoose.connect( 
    String(process.env.DB_CONNECTION),
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { 
        console.log('Connected to DB!');
        console.log(String(process.env.DB_CONNECTION));
    }
);

app.listen(PORT, () => {
    console.log('Server is running');
});