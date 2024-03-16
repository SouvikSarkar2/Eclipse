import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    playlists: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist'
    },
    likedSongs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }

},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;