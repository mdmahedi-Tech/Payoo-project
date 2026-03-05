
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
    const newbalance=currentBalance()+Number(addmoney);
    console.log('after adding',newbalance);

    //set pin number and  validate
   
    const pin=getValueFromInput('add-money-pin');
   if(pin==='1234'){
    alert(`add money success ${selectBank} 
        at ${new Date()}`);
     setValue(newbalance);
    return;
   }
   else{
    alert('incorrct pin');
   
    return;
   }
    //console.log('pin',pin);

})