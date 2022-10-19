import Word from '../models/Word.js';

//get
export const getByLesson = async (req, res) => {
    const { lessonId } = req.params;
    try {
        const words = await Word.find({ lesson: lessonId }).sort({ word: 1 });
        res.status(200).json(words);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

//get all

export const getAll = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

//create
export const create = async (req, res) => {
    const { token, ...word } = req.body;

    if (token === process.env.TOKEN) {
        try {
            const newWord = new Word({ ...word });
            await newWord.save();

            res.status(200).json({
                success: true,
                message: 'Tạo từ thành công',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Invalid server !',
            });
        }
    } else {
        res.status(404).json({
            success: false,
            message: 'Bạn không được phép tạo',
        });
    }
};

//update
export const update = async (req, res) => {
    const wordId = req.params.id;
    const { token, ...word } = req.body;

    if (token === process.env.TOKEN) {
        try {
            await Word.findByIdAndUpdate(wordId, { ...word });

            res.status(200).json({
                success: true,
                message: 'Đã update từ mới thành công',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Invalid server !',
            });
        }
    } else {
        res.status(404).json({
            success: false,
            message: 'Bạn không được phép update',
        });
    }
};
