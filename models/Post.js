import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tbOfContent: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        views: { type: Number, default: 0 },
    },
    { timestamps: true },
);

export default mongoose.model('post', postSchema);
