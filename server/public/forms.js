class Form
{
    constructor()
    {
        this.form = '';
    } // end constructor

    set setForm(e)
    {
        this.form = e.target;
    } // end method setForm

    get getForm()
    {
        return this.form;
    } // end method getForm
} // end class form

class SignupForm extends Form
{
    constructor()
    {
        /*this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNum = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';*/
    } // end constructor

    submitForm()
    {
    } // end method submit form 
} // 

class SigninForm extends Form
{
    constructor()
    {
        this.username = '';
        this.password = '';
    } // end constructor

    submitForm(){} // end method submitForm
} // end class SigninForm


class SetMenuForm extends Form{} //
class OrderForm extends Form{} //