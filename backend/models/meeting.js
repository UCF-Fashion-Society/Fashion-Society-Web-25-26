import mongoose from "mongoose";
const { Schema } = mongoose;

const meetingSchema = new mongoose.Schema({
 _id: {type: Schema.Types.ObjectId, required: true},
 date:{type: Date, required: true},
});
const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
