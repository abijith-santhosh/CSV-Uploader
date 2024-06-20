import "./env.js"
import express from 'express';
import EjsLayouts from "express-ejs-layouts";
import { connectUsingMongoose } from "./config/db.config.js";
import path from 'path';

import CsvController from "./src/controller/csv.controller.js";
import { uploadFile } from "./src/middlewares/csvfileupload.midddleware.js";

const server = express();


server.use(express.static("public"));
//Setup view engine
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"));

server.use(EjsLayouts);
server.use(express.urlencoded({extended:true}));

const csvController = new CsvController();

//Routes
server.get("/",csvController.home);
server.post("/",uploadFile.single('csvFile'),csvController.uploadDisplay);
server.get("/details/:id",csvController.getDetails)

server.use(express.static("src/views"));

//listening to port
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectUsingMongoose();
  });