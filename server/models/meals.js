// this class holds all meal options
// it is a kind of a database to all options
import multer from 'multer';
import exception from '../exception';

export class Meals{
    constructor()
    {
        this.mealDB = null;
    } // end constructor

    // create meal database if it doesnt exist

    // addMeal method
    addMeal(req, res)
    {
        const n = req;
        res.send(res.body);
    } // end method addMeal

    //modifyMeal method
    modifyMeal(id, name, image )
    {
        if(name)
        {
            this.mealDB[id].name = name;
            //localStorage.mealOptions = JSON.stringify(this.mealDB);
        }
        if(image)
        {
            ++id;
            //processImage(id, image);
        }
    } // end method modifyMeal

    // deleteMeal method
    deleteMeal(id, name)
    {
        this.mealDB[id].splice(id, 1);
        //localStorage.mealOptions = JSON.stringify(this.mealDB);
        //processImage(id);
    } // end method deleteMeal

    processImage(id, image = "meal")
    {} // end method processImage
} // end class Meals