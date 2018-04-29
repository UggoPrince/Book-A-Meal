class ManageMealForm
{
    constructor()
    {
        this.form = '';
    } // end constructor

    setForm(e)
    {
        this.form = e.target;
    } // end method setForm

    get getForm()
    {
        return this.form;
    } // end method getForm

    submitAddForm()
    {
        const form = this.form;
        let error = false;
        let errorSpan = document.getElementById('addError');
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "14px";
        errorSpan.innerHTML = "";
        let mealName = form.mealName.value;
        let file = form.mealImage.files[0];
        let mealNameId = document.getElementById('addMealName');
        let mealImgId = document.getElementById('addMealImage');

        if(!mealNameId.checkValidity()){
            error = true;
            errorSpan.innerHTML += mealNameId.validationMessage;
        }
        else if(mealName.length == "")
        {
            error = true;
            errorSpan.innerHTML += mealNameId.validationMessage;
        }

        if(!mealImgId.checkValidity()){
            if(error) errorSpan.innerHTML += mealNameId.validationMessage + '/n';
            else errorSpan.innerHTML = mealNameId.validationMessage;
            error = true;
        }
        else if(file == null || file == undefined)
        {
            if(error) errorSpan.innerHTML += mealNameId.validationMessage + '/n';
            else errorSpan.innerHTML = mealNameId.validationMessage;
            error = true;
        }

        if(!error)
        {
            errorSpan.innerHTML = "";
            this.form.submit();
        }
    } // end method submitForm

    submitModifyForm()
    {
        const form = this.form;
        let error = false;
        let errorSpan = document.getElementById('modifyError');
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "14px";
        errorSpan.innerHTML = "";
        let selectObj = form.selectMeal;
        let file = form.mealImage.files[0];
        let mealName = form.mealName.value;
        let mealNameId = document.getElementById('modifyMealName');
        let mealImgId = document.getElementById('modifyMealImage');

        if(selectObj.options[0])
        {
            errorSpan.innerHTML += "Select a Meal!" + "/n";
        }
        else
        {
            errorSpan.innerHTML = "";
            if(!mealNameId.checkValidity)
            {
                error = true;
                errorSpan.innerHTML += mealNameId.validationMessage;
            }

            if(mealName.length == 0 && file == undefined)
            {
                error = true;
                errorSpan.innerHTML += "No mealName or/and image was entered!";
            }
            else
            {
                if(!error) form.submit();
            }
            
        }
    } // end method submitModifyForm

    submitDeleteForm()
    {
        const form = this.form;
    } // end method submitDeleteForm
} // end class ManageMealForm

const mmForm = new ManageMealForm();

function handleSubmit(e){
    e.preventDefault();
    mmForm.setForm(e);

    if( e.target.name == "addMealForm")
    {
        mmForm.submitAddForm();
    }
    else if(e.target.name == "modifyMealForm")
    {
        mmForm.submitModifyForm();
    }
    else if(e.target.name == 'deleteMealForm')
    {
        mmForm.submitDeleteForm();
    }
    /*else if()
    {}*/
    //e.target.submit();
}

//document.addEventListener('submit', handleSubmit);