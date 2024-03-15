import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    coverPhotoURL: {
        type: String,
        required: true,
    },

},{timestamps: true});