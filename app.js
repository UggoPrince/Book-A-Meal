import express from 'express';
import fs from 'fs';
import path from 'path';
import index from './server/routes/index';
import meals from './server/routes/meals';

const app = express();

app.use(express.static(path.join(__dirname, '/server/public')));
app.use(express.static(path.join(__dirname, '/UI')));

app.use('/', index);
app.use('/api/v1/meals', meals);
app.use('/api/v1/meals/mealId', meals);

app.listen(8080);