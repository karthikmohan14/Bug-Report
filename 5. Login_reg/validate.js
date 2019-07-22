function validate()
{
    var password1 = document.forms["register"]["password1"].value;
    var email = document.forms["register"]["r1"].value;
    var fl=0;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(password1 !="abcde")
    {
        fl=1;
    }
    if(re.test(String(email).toLowerCase()))
    {}
    else{
        fl=1; 
    }

    if(fl==0)
    {
        alert("Login successful");
        return true;
    }
    else if(fl==1)
    {
    alert("Email or Password does not exist ");
    return false;
    }

}