import Post from '../models/Post.js';

//get all | top
export const getAll = async (req, res) => {
    const { type } = req.query;
    let posts = [];
    try {
        if (!type) {
            posts = await Post.find().sort({ createdAt: -1 });
        } else {
            posts = await Post.find().sort({ views: -1 }).limit(6);
        }

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

//get by id
export const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Invalid server !' });
    }
};

// create post
export const create = async (req, res) => {
    const { token, ...form } = req.body;
    if (token === 'lichdt') {
        try {
            const newPost = new Post({ ...form });
            await newPost.save();

            res.status(200).json({
                success: true,
                message: 'Đã tạo thành công !',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Invalid server !',
            });
        }
    } else {
        res.status(500).json({
            success: false,
            message: 'Bạn không được phép tạo',
        });
    }
};
