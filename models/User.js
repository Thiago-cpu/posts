import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    posts: [String],
    favPosts: [String]
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema)