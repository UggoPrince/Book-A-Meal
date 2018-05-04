import express from 'express';
import {Meals} from '../models/meals.js';

const app = express();

const mealsDB = [
                    {
                        'id': '1',
                        'name': 'Egusi and Eba'
                    },
                    {
                        'id': '2',
                        'name': 'Amala and Ewedu'
                    },
                    {
                        'id': '3',
                        'name': 'Beans'
                    },
                    {
                        'id': '4',
                        'name': 'Tea'
                    },
                    {
                        'id': '5',
                        'name': 'Fried Rice'
                    },
                ];

const meal = new Meals(mealsDB);

const index = (req, res) => {
        meal.getMeals(req, res);
};

const add_meal = (req, res)=>{
        meal.addMeal(req, res);
            //#156846525
    };

const modify_meal = (req, res) => {
    meal.modifyMeal(req, res);
};

const delete_meal = (req, res) => {
    meal.deleteMeal(req, res);
};

export {index, add_meal, modify_meal, delete_meal};