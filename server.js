import express from 'express';
import fs from 'fs';
import path from 'path';
import index from './server/routes/index';
import {getm, postm, putm, delm} from './server/routes/meals';

const app = express();

app.use('/api/v1/meals', getm);
app.use('/api/v1/meals', postm);
app.use('api/v1/meals/:mealId', putm);
app.use('/api/v1/meals/:mealId', delm);

app.listen(8080);