// this class holds all meal options
// it is a kind of a database to all options

import exception from '../exception';

class Meals{
    constructor()
    {
        initMeal();
    } // end constructor

    // create meal database if it doesnt exist
    initMeal()
    {
        if(localStorage.mealOptions)
        {
            this.mealDB = JSON.parse(localStorage.mealOptions);
        }
        else
        {
            this.mealDB = [];
            localStorage.setItem("mealOptions", JSON.stringify(this.mealDB));
        }
    } // end method initMeal

    // addMeal method
    addMeal(name, image)
    {
        if(this.mealDB.length == 0)
        {
            const deMeal = {"mealId":1, "name":name};
            this.mealDB.push(deMeal);
            localStorage.mealOptions = JSON.stringify(this.mealDB);
            //processImage( 1, image);
        }
        else
        {
            let mealNum = this.mealDB.length; // total meal options
            let nameExist = false;
            for( let i = 0; i < mealNum; i++ )
            {
                if(this.mealDB[i].name == name) nameExist = true;
            } // end for

            if(nameExist) exception.displayMessage("A meal with the name ${name}" + 
                + "already exist in database");
            else
            {
                ++mealNum;
                const deMeal = {"mealId":mealNum, "name":name};
                this.mealDB.push(deMeal);
                localStorage.mealOptions = JSON.stringify(this.mealDB);
                //processImage(mealNum, image);
            }
        }
    } // end method addMeal

    //modifyMeal method
    modifyMeal(id, name, image )
    {
        if(name)
        {
            this.mealDB[id].name = name;
            localStorage.mealOptions = JSON.stringify(this.mealDB);
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
        localStorage.mealOptions = JSON.stringify(this.mealDB);
        //processImage(id);
    } // end method deleteMeal

    processImage(id, image = "meal")
    {} // end method processImage
} // end class Meals

export default Meals;