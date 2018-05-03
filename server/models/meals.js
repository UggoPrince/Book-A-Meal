// this class holds all meal options
// it is a kind of a database to all options
import multer from 'multer';
import exception from '../exception';

export class Meals{
    constructor(deMeals)
    {
        this.meals = deMeals;
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
    modifyMeal(id, name, image )
    {

    } // end method modifyMeal

    // deleteMeal method
    deleteMeal(id, name)
    {
        
    } // end method deleteMeal

    processImage(id, image = "meal")
    {} // end method processImage
} // end class Meals