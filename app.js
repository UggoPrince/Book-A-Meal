import express from 'express';
import fs from 'fs';
import index from './server/routes/index';

const app = express();
app.use('/', index);


app.listen(8080);