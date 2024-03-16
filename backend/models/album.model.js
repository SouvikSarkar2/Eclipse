import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }
},{timestamps: true});

const Album = mongoose.model('Album', albumSchema);