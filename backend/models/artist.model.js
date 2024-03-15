import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
    },
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    },
    albums: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }
},{timestamps: true});