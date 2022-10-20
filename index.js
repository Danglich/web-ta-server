import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import lessonRouter from './routes/lesson.js';
import wordRouter from './routes/word.js';
import postRouter from './routes/post.js';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.igaxnr3.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );

        console.log('MongoDB connected !!!');
    } catch (error) {
        console.log('Connect to MongoDB failed: ' + error);
        process.exit(1);
    }
};

connectDB();

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

const PORT = process.env.PORT || 8000;

app.use('/api/lesson', lessonRouter);
app.use('/api/word', wordRouter);
app.use('/api/post', postRouter);

app.listen(PORT, () => {
    console.log('listening on port  ' + PORT);
});
