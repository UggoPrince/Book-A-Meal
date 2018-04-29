//import {Form, ManageMealForm} from '../models/forms';
class MealOptions
{
    constructor()
    {
        this.modMealSelect = ''; // holds the html selct object for modifying meal
        this.delMealSelect = ''; // holds the html selct object for deleting meal
        this.mealDB = null;
        this.empty = false;
    } // end empty constructor

    initProp()
    {
        this.modMealSelect = document.modifyMealForm.selectMeal;
        this.delMealSelect = document.deleteMealForm.selectMeal;
        if(!localStorage.mealOptions)
        {
            this.mealDB = [];
            const json = JSON.stringify(this.mealDB);
            localStorage.setItem('mealOptions', json);
        }
        else
        {
            this.mealDB = JSON.parse(localStorage.mealOptions);
        }
    } // end method initProperties

    checkMealDBLength()
    {
        if(this.mealDB.length == 0)
        {
            this.empty = false;
        }
        else
        {
            this.empty = true;
        }
    } // end method getMealDBLength

    setupMealOptions()
    {

        
    } // end method setupMealOptions

    populateSelectBox( empty = false )
    {
        const box1 = this.modMealSelect;
        const box2 = this.delMealSelect;
        if(!empty)
        {
            for( let i = 0; i < 1; i++)
            {
                box1.options[i].text = 'No Meals Present';
                box1.options[i].value = "Select";
                box2.options[i].text = "No meals Present";
                box2.options[i].value = "Select";
            }
        }
        else
        {
            box1.options[0].text = "Select Meal Option...";
            box1.options[0].value = "Select";
            box2.options[0].text = "Select Meal Option...";
            box2.options[0].value = "Select";

            for(let i = 1; i < this.mealDB.length; i++)
            {
                const box = document.createElement('option');
                box.index = i;
                box.value = this.mealDB[i].id;
                box.text = this.mealDB[i].name;
            }
        }

    } // end method populateSelectBox

} // end class MealOptions

const mealOP = new MealOptions();

document.addEventListener('DOMContentLoaded', ()=>{
    mealOP.initProp();
    mealOP.setupMealOptions();
    mealOP.checkMealDBLength();
    mealOP.populateSelectBox();
});
