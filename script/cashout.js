document.getElementById('cashout-btn').addEventListener('click',function(){
   //1-get the agent number and validate
   const agentnumberinput=document.getElementById('cashout-number');
   const agentnumber=agentnumberinput.value;
   if(agentnumber.length!==11){
    alert('invlaid agent number')
    return;
   }
           //console.log(agentnumber);
   //get the amount
   const cashoutinput=document.getElementById('cashout-amount');
   const cashoutvalue=cashoutinput.value;
              console.log('for cashout amount',cashoutvalue);
   //get the balance current
   const balanceinput=document.getElementById('balance')
   const amount=balanceinput.innerText;

   
      
   //calcolate new balance
   const newbalance=Number(amount)-Number(cashoutvalue);
        
   if(newbalance<0){
    alert('invalid');
    return;
   
   }
  console.log('new balance',newbalance);

  // validation and get the pin
  const cashoutpininput=document.getElementById('cashout-pin');
  const pin=cashoutpininput.value;
    //console.log(pin);
  if(pin==='1234'){
    //show an alart and set balance
    alert('cashout successfull')
    console.log('new balance',newbalance);
    balanceinput.innerText=newbalance;
  }
  else{
    //show an alart and return
    alert('invalid pin')
    return;
    
  }

  
})