import mongoose, { Schema } from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }
},{timestamps: true});

const Playlist = mongoose.model('Playlist', playlistSchema);