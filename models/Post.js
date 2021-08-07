import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    likes: Number,
    dislikes: Number,
    publishedAt: {
        type: Date,
        default: () => new Date(),    
    },
    userId: String,
});

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema)