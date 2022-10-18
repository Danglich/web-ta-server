import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const wordSchema = new Schema(
    {
        lesson: {
            type: Schema.Types.ObjectId,
            ref: 'lesson',
        },
        word: { type: String, required: true },
        pronounce: { type: String, required: true },
        explain: { type: String, required: true },
        type: { type: String, required: true },
        exampleE: { type: String, default: '' },
        exampleV: { type: String, default: '' },
        image: { type: String, required: true },
        sound: { type: String, required: true },
    },
    { timestamps: true },
);

export default mongoose.model('word', wordSchema);
