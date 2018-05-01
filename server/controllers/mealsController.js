import fs from 'fs';
import path from 'path';
import url from 'url';
import bodyParser from 'body-parser';
import multer from 'multer';
import express from 'express';
import {Meals} from '../models/meals.js';

const app = express();

//const store = localStorage.getItem("mealOptions");
const meal = new Meals();

app.use(express.static(path.join(__dirname, '/server/public')));
app.use(express.static(path.join(__dirname, '/UI')));

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


const index = (req, res) => {
        let md = "All MEALS" + '</br>';
        for( let i = 0; i < mealsDB.length; i++){
            md += mealsDB[i].id + " : " + mealsDB[i].name + '</br>';
        }
        res.send(md);
        //res.sendFile(path.join(__dirname, '../../UI/manage_meals.html'));
};

const add_meal = (req, res)=>{
        res.send(
            'Your Meal Was Successfully Added'
            //#156846525
        );
    };

const modify_meal = (req, res) => {
    let c = req.params.mealId;
    let m = "The meal doesn't exist. Add it as a meal option";
    if(mealsDB[c-1])
        m = "Your meal "  + "<strong>" + mealsDB[c-1].name + "</strong>" + " was successfully UPDATED";
    res.send( m );
};

const delete_meal = (req, res) => {
    let c = req.params.mealId;
    let m = "The meal doesn't exist. Add it as a meal option";
    if(mealsDB[c-1])
        m = "Your meal " + "<strong>" +  mealsDB[c-1].name + "</strong>" + " was successfully DELETED";
    res.send( m );
};

export {index, add_meal, modify_meal, delete_meal};