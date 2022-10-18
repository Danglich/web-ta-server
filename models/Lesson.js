import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LessonSchema = new Schema(
    {
        videoFrame: {
            type: String,
            default: '',
        },
        image: { type: String, required: true },
        name: { type: String, required: true },
        index: { type: Number, required: true },
    },
    { timestamps: true },
);

export default mongoose.model('lesson', LessonSchema);
