import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, `${Math.floor(Math.random() * 90000)}#${file.originalname}`);
    },
});

const upload = multer({ storage: storage });
export default upload;
