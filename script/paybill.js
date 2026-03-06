document.getElementById('add-billMoney-btn').addEventListener('click',function(){
   //get the bank name
    const bankname=getValueFromInput('pay-money-bank');
    if(bankname==='select bank'){
        alert('select a bank');
        return;
    }
   
   //get biller account no.
   const accountno=getValueFromInput('add-bill-acountNo')
   if(accountno.length!==11){
    alert('invalid acount no.');
    return;
   }

   //get pay amount
   const payamount=getValueFromInput('add-bilMmoney-amount')
   //calcolate
   const currentbalanace=currentBalance();
    const newbalance=currentbalanace-Number(payamount);
    if(newbalance<0){
        alert('insufficient balance');
        return;
    }
    
   
   //get the pin and validate the pin
   const pin=getValueFromInput('add-billMoney-pin');
   if(pin==='1234'){
    alert('payment successfull');
    setValue(newbalance)

    //add trasaction history
       //catch the conainer
    const history=document.getElementById('history-container');
    //create a div
    const newhistory=document.createElement('div')
    //set html and value
    newhistory.innerHTML=`
     <div class="transacton-card p-5 bg-base-100">
      pay to ${payamount} taka successfully to ${accountno} 
        at ${new Date()}
     </div>
    `
    //appned the child
    history.appendChild(newhistory);

   }
   else{
    alert('incorrect pin');
    return;
   }
   
})