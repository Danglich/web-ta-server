import Lesson from '../models/Lesson.js';

//get all lesson
export const getAll = async (req, res) => {
    try {
        const lessons = await Lesson.find().sort({ index: 1 });

        res.status(200).json(lessons);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

//get a lesson
export const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const lesson = await Lesson.findById(id);

        res.status(200).json(lesson);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

//create
export const create = async (req, res) => {
    const { token, ...lesson } = req.body;

    if (token === process.env.TOKEN) {
        try {
            const newLesson = new Lesson({ ...lesson });
            await newLesson.save();

            res.status(200).json({
                success: true,
                message: 'Đã thêm bài học mới',
            });
        } catch (error) {
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
    const lessonId = req.params.id;
    const { token, ...lesson } = req.body;

    if (token === process.env.TOKEN) {
        try {
            await Lesson.findByIdAndUpdate(lessonId, { ...lesson });

            res.status(200).json({
                success: true,
                message: 'Đã update bài học thành công',
            });
        } catch (error) {
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
