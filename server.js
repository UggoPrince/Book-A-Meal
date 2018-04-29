import express from 'express';
import fs from 'fs';
import path from 'path';
//import bodyParser from 'body-parser';
//import multer from 'multer';
import index from './server/routes/index';
import {getm, postm} from './server/routes/meals';

const app = express();
app.use(express.static(path.join(__dirname, '/server/public')));
app.use(express.static(path.join(__dirname, '/UI')));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/v1/meals', getm);
app.use('/api/v1/meals', postm);

app.listen(8080);