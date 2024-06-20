import { CSVModel } from "../model/csv.schema.js";

// To create a new File in DataBase
export const create = async(file,results)=>{
    try {
        const newFile = new CSVModel({
            name: file.originalname,
            timestamp: Date.now(),
            size:file.size ,
            data:results
        });
    
        await newFile.save();
        return newFile;
    } catch (error) {
        console.error('Mongoose error:', error);
        throw new Error('Error creating file.');
    }
    
}
// To get all files in The DataBase
export const getAll = async ()=>{
    // console.log('Fetching all files...');
    const files = await CSVModel.find({});
    // console.log('Files fetched:', files);
    return files;
}

//Get the file by ID
export const getById = async (id)=>{
    return await CSVModel.findById(id);
}