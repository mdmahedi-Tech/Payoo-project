document.getElementById('cashout-btn').addEventListener('click',function(){
   //1-get the agent number and validate
  const agentnumberinput=getValueFromInput('cashout-number')
  if(agentnumberinput.length!==11){
    alert('invalid agent number')
    return;
  }
  
 
       //2-get the cash out amount
  const cashoutamount=getValueFromInput('cashout-amount')
        //3-get the balance current
        
    
       //4-calcolate new balance
       const amount=currentBalance();
   const newbalance=amount-Number(cashoutamount);
        
    if(newbalance<0){
     alert('ballance is not sufficent');
     return;
   
  }
     //console.log('new balance',newbalance);
    //5- validation and get the pin
    const pin=getValueFromInput('cashout-pin');
    if(pin==='1234'){
      alert('cashout successfull');
     
      setValue(newbalance);
      //catch the history container
     const histoy=document.getElementById('history-container');
     //create a new div
     const newhistory= document.createElement('div');
     //create a new html
     newhistory.innerHTML= `
      <div class="transacton-card p-5 bg-base-100">
      cash out ${cashoutamount} taka successfully to ${agentnumberinput} 
        at ${new Date()}
     </div>
     `
     //append the newhistory in history
     histoy.appendChild(newhistory);
      // document.getElementById('balance').innerText=newbalance;
    
    }
    else{
      alert('invalid pin');
      return;
    }
})



// document.getElementById('cashout-btn').addEventListener('click',function(){
//    //1-get the agent number and validate
//    const agentnumberinput=document.getElementById('cashout-number');
//    const agentnumber=agentnumberinput.value;
//    if(agentnumber.length!==11){
//     alert('invlaid agent number')
//     return;
//    }
//            //console.log(agentnumber);
//         //2-get the amount
//    const cashoutinput=document.getElementById('cashout-amount');
//    const cashoutvalue=cashoutinput.value;
//               console.log('for cashout amount',cashoutvalue);
//        //3-get the balance current
//    const balanceinput=document.getElementById('balance')
//    const amount=balanceinput.innerText;

   
      
//         //4-calcolate new balance
//    const newbalance=Number(amount)-Number(cashoutvalue);
        
//    if(newbalance<0){
//     alert('invalid');
//     return;
   
//    }
//   console.log('new balance',newbalance);

//   //5- validation and get the pin
//   const cashoutpininput=document.getElementById('cashout-pin');
//   const pin=cashoutpininput.value;
//     //console.log(pin);
//   if(pin==='1234'){
//     //show an alart and set balance
//     alert('cashout successfull')
//     console.log('new balance',newbalance);
//     balanceinput.innerText=newbalance;
//   }
//   else{
//     //show an alart and return
//     alert('invalid pin')
//     return;
    
//   }

  
// })