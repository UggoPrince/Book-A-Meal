import fs from 'fs';
import path from 'path';
import url from 'url';
//import bodyParser from 'body-parser';
//import multer from 'multer';
import express from 'express';
import {Meals} from '../models/meals.js';

const app = express();

//const store = localStorage.getItem("mealOptions");
const meal = new Meals();

app.use(express.static(path.join(__dirname, '/server/public')));
app.use(express.static(path.join(__dirname, '/UI')));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

const index = (req, res) => {
        res.sendFile(path.join(__dirname, '../../UI/manage_meals.html'));
};

const add_meal = (req, res)=>{
    //const form = req.body.aForm;
    //const uri = url.format(req.url, true);
    meal.addMeal(req);
    //if(form == "addMealForm")

        res.send(
            req.body.aForm
            //meals.addMeals(req.body.name);#156846525
        );
    };

const modify_meal = (req, res) => {
    res.send(req.body.aForm
        //meals.modifyMeals()
    );
};

const delete_meal = (req, res) => {
    res.send('deleted');
};

export {index, add_meal, modify_meal, delete_meal};