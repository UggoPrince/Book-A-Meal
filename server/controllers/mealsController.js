import meals from '../models/meals';

exports.index = function(req, res){
    res.send('on the way');
};

exports.add_meal = function(req, res){
    res.send(
        'add Meal on constructoin'
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