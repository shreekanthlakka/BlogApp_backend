import multer from "multer";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "./public/temp"));
    },
    filename: function (req, file, cb) {
        cb(null, `${Math.floor(Math.random() * 90000)}#${file.originalname}`);
    },
});

const upload = multer({ storage: storage });
export default upload;
