document.getElementById('login-btn')
.addEventListener('click',function(){
    //1-get the mobile number
    const mobileInput=document.getElementById('input-number')
    const mobilenumber=mobileInput.value;
    //2-get the pin 
    const inputpin=document.getElementById('input-pin')
    const pin=inputpin.value;
    

    //3-match the mobile and pin to access 
    if(mobilenumber=='01751020510' && pin=='1234'){
        alert('login successfull');
       
        window.location.assign("/home.html")
    }
    else{
        alert('login failed');
        return;
    }
})