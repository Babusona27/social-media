const multer = require('multer');
const path = require('path');
const helper = require('../helper/index');
const fs = require('fs');

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'video/mp4' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"), false);
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir = './public/uploads/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        let fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('file');


exports.fileUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json(helper.response(500, false, "something went wrong!"));
            }
            let file = req.file;
            let filePath = file.path;
            let fileUrl = filePath.replace('public', '');
            return res.status(200).json(helper.response(200, true, "File Uploaded Successfully!", { fileUrl: fileUrl }));
        });
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}