import express from 'express';
import url from 'url';
import {index, add_meal, modify_meal, delete_meal} from '../controllers/mealsController';

const router = express.Router();

const getm = router.get('/', index);

//const post = router.post('/', meals.add_meal);

const postm = router.post('/', upload.single('mealImage'), add_meal);

const putm = router.put('/:mealId', modify_meal);

const delm = router.delete('/:mealId', delete_meal);

export {getm, postm, putm, delm};