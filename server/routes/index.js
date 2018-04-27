import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

//app.use(express.static(__dirname + '/public'));
router.get('/', function(req, res){
    //res.sendFile(path.join(__dirname + '/../public/ui.scss'));
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

export default router;