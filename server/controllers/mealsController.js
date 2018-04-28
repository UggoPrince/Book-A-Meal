import fs from 'fs';
import path from 'path';
import express from 'express';
import meals from '../models/meals';

const app = express();

exports.index = function(req, res){
        res.sendFile(path.join(__dirname, '/../../UI/manage_meals.html'));
};

exports.add_meal = function(req, res){
    res.send(
        req.body +
        ' add Meal on construction'
        //meals.addMeals(req.body.name);#156846525
    );
};

exports.modify_meal = function(req, res){
    res.send('dddd'
        //meals.modifyMeals()
    );
};

exports.delete_meal = function(req, res){
    res.send('deleted');
};