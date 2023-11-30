const multer = require('multer');
const path = require('path');
const helper = require('../helper/index');
const fs = require('fs');

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp' || file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"), false);
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir = './public/uploads/';
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp') {
            dir += 'images/';
        } else if (file.mimetype === 'video/mp4') {
            dir += 'videos/';
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage, fileFilter: fileFilter, limits: {
        fileSize: 11 * 1024 * 1024 // 10MB
    }
}).single('file');

exports.fileUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json(helper.response(500, false, err.message));
            }
            if (!req.file) {
                return res.status(200).json(helper.response(200, false, "No file uploaded!"));
            }
            let file = req.file;
            if ((file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp') && file.size > 10 * 1024 * 1024) {
                return res.status(200).json(helper.response(200, false, "Image file size is too large. Allowed file size is 10MB"));
            }
            let filePath = file.path;
            let fileUrl = filePath.replace(/\\/g, "/");
            return res.status(200).json(helper.response(200, true, "File Uploaded Successfully!", { fileUrl: fileUrl }));
        });
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}