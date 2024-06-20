import multer from "multer";
import path from "path";

const storageConfig = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/csv files");
    },
    filename:(req,file,cb)=>{
        const name = file.originalname;
        cb(null,name);
    }
}) 

export const uploadFile = multer({storage:storageConfig,fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    // backend validation for csv file
    if (ext !== '.csv') {
      return callback(new Error('Only CSV files are allowed'));
    }
    callback(null, true);
  }});