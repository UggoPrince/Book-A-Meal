import express from 'express';
import meals from '../controllers/mealsController';

const router = express();

router.get('/', meals.index);

router.post('/', meals.add_meal);

router.put('/mealId', meals.modify_meal);

router.delete('/mealId', meals.delete_meal);

export default router;