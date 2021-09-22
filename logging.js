
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "F" && password == "frf"){
        alert ("Login successfully");
        window.location="home.html"// Redirecting to other page.
        return false;
    }



    var username = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(username =='' && password=='')
    {
        alert("Please enter username and password");
    }
     else if(password=='' )
    {
        alert("Please enter password");
    }
     else if(username=='' )
     {
         alert("Please enter username");
     }


//Reset Inputfield code.
    function clearFunc()
    {
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

}


