function validatesignup(){
    var signupusername= document.getElementById("signupusername").value;
    var password= document.getElementById("password").value;
    var Cpassword= document.getElementById(" Cpassword").value;




    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(signupusername=='')
    {
        alert('Please enter your username');
    }

    else if(!letters.test(signupusername))
    {
        alert('User name field required only alphabet characters');
    }
    else if(password=='')
    {
        alert('Please enter Password');
    }
    else if(Cpassword=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(password))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(password != Cpassword)
    {
        alert ('Password not Matched');
    }

    else if(document.getElementById("password").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else
    {
        alert('Thank You for Signing up & You are Redirecting to Login Page');
        // Redirecting to other page or webste code.
        window.location= "Plasma.html";
    }

function clearFunc()
{
    document.getElementById("signupusername").value="";
    document.getElementById("password").value="";
    document.getElementById(" Cpassword").value="";

}
}