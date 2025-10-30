import mongoose from 'mongoose';

import { MongoClient, ServerApiVersion } from 'mongodb';
export const uri = "mongodb+srv://imani:jwyman9GEHmj9esI@meetingdates.5ukytpl.mongodb.net/?appName=MeetingDates";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export async function connectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    await mongoose.connect(uri,{dbName:"Meetings"});
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
connectDB().catch(console.dir);