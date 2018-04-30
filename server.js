import express from 'express';
import fs from 'fs';
import path from 'path';
import index from './server/routes/index';
import {getm, postm} from './server/routes/menu';

const app = express();

app.use('/api/v1/menu', getm);
app.use('/api/v1/menu', postm);

app.listen(8080);