import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
const app: express.Application = express();
//Import Routes
const brotesRoute = require('./routes/brotes');


const PORT = 8080;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/brotes', brotesRoute);


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