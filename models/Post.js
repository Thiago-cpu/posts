import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    likes: Number,
    dislikes: Number,
    userId: String,
});

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema)