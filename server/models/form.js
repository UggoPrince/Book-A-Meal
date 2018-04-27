class Form
{
    constructor()
    {
        
    } // end constructor
} // end class form

class SignupForm extends Form
{
    constructor()
    {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNum = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
    } // end constructor

    submitForm(){} // end method submit form 
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

class ManageMealForm extends Form
{
    constructor()
    {
        this.id = '';
        this.lastName = '';
        this.email = '';
        this.phoneNum = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
    } // end constructor
} // end class ManageMealForm
class SetMenuForm extends Form{} //
class OrderForm extends Form{} //