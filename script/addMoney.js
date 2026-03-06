
document.getElementById('add-money-btn').addEventListener('click',function(){
    console.log('add money')

    //get the add money bank
    const selectBank=getValueFromInput('add-money-bank');
    if(selectBank==='select a bank'){
        alert('select a bank');
        return;
    }
    //get the acount number
    const acountNumber=getValueFromInput('add-bank-acount');
    if(acountNumber.length!==11){
     alert('invalid Acount number')
     return;
    }
    //add money amount
    const addmoney=getValueFromInput('add-money-amount');
    //calculate
    const newbalance=currentBalance()+Number(addmoney);
    console.log('after adding',newbalance);

    //set pin number and  validate
   
    const pin=getValueFromInput('add-money-pin');
   if(pin==='1234'){
    alert(`add money success from ${selectBank} 
        at ${new Date()}`);
     setValue(newbalance);
     //catch the history container
     const histoy=document.getElementById('history-container');
     //create a new div
     const newhistory= document.createElement('div');
     //create a new html
     newhistory.innerHTML= `
      <div class="transacton-card p-5 bg-base-100">
      add ${addmoney} tk successfully from ${selectBank} acc no ${acountNumber}
        at ${new Date()}
     </div>
     `
     //append the newhistory in history
     histoy.appendChild(newhistory);
    return;
   }
   else{
    alert('incorrct pin');
   
    return;
   }
    //console.log('pin',pin);

})