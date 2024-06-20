import mongoose from "mongoose";


//Defining schema for the collection
const CSVSchema = new mongoose.Schema({
    name:{type:String,
    required:true},
    timestamp:{type:Date,default:Date.now,get:function(timestamp) {
        // Convert the date to 12-hour format with AM/PM
        return timestamp.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });
    }},size:{type:Number},
    data:Array
});

//Creating and exporting the model
export const CSVModel = mongoose.model("Uploads",CSVSchema);