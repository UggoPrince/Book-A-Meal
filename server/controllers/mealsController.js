import fs from 'fs';
import meals from '../models/meals';

exports.index = function(req, res){
        //const ff = "<form>"+
                    //'<input type="text" /></form>';
        //res.set('Content-Type', 'text/html');
        //res.send(new Buffer(ff));
        res.sendFile(__dirname + '/UI/../../manage_meals.html');
};

exports.add_meal = function(req, res){
    res.send(
        'add Meal on construction'
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