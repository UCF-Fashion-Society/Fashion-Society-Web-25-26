import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import { connectDB } from './config.js';
import dotenv from 'dotenv';
import Meeting from './models/meeting.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.listen(5001); // start Node + Express server on port 5000
app.get("/meetings/:committee", async(req,res) =>{//gets all meetings for specific committee
    const{ committee } = req.params;
    console.log("Committee requested:", committee);
    try{
        const MeetingModel = mongoose.model(committee,Meeting.schema,committee);

        const meetings = await MeetingModel.find().lean();
        const today = new Date();
        const nextMeeting = meetings.find(m=> new Date(m.date) >= today);

        res.json(nextMeeting || {message:"TBA"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
});






