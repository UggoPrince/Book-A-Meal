// this class holds all meal options
// it is a kind of a database to all options
import multer from 'multer';
import exception from '../exception';

export class Meals{
    constructor(deMeals)
    {
        this.meals = deMeals;
        this.id;
        this.name;
        //this.image;
    } // end constructor

    getMeals(req, res)
    {
        res.json(this.meals);
    } // end method getMeals

    // addMeal method
    addMeal(req, res)
    {
        res.json({"success":"Meal Success fully added"});
    } // end method addMeal

    //modifyMeal method
    modifyMeal(req, res)
    {
        if(this.meals[req.params.mealId - 1])
            res.json(this.meals[req.params.mealId -1].name + " was successfully Updated");
        else
            res.json("Meal with such id doesnt exist in database. Add it as a meal option");
    } // end method modifyMeal

    // deleteMeal method
    deleteMeal(req, res)
    {
        if(this.meals[req.params.mealId - 1])
            res.json(this.meals[req.params.mealId -1].name + " was successfully deleted");
        else
            res.json("Meal with such id doesnt exist in database. Add it as a meal option");
    } // end method deleteMeal
} // end class Meals