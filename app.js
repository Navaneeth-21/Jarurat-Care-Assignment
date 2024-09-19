require('dotenv').config();
const express = require('express');
const database = require('./config/db');
const cors = require('cors');
const serviceRoutes = require('./routes/router');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/v1' , serviceRoutes);

app.get('/' , (req,res)=>{
    res.send('<h1>JARURAT CARE</h1>')
});


const start = async () => {
    try {
        await database(process.env.MONGO_URL);
        app.listen(PORT , ()=>{
            console.log(`Server is running on : http://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.log('Unable to connect:',error);
    }
};


start();
