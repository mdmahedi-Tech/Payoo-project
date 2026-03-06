// const { createElement } = require("react");

console.log('transfer')
document.getElementById('transfer-btn').addEventListener('click',function(){
    //get the transfer number
    const transfernumber=getValueFromInput('transfer-account');
    if(transfernumber.length!==11){
        alert('transfer account is valid');
        return;
    }
    //get the amount
    const transbalance=getValueFromInput('transfer-amount');
    //get the current balance
    const currentamount=currentBalance()
    //calcolate
    newbalance=currentamount-Number(transbalance)

    if(newbalance<0){
        alert('amount is not sufficient');
        return;
     }
    
    //get the pin
    const pin=getValueFromInput('transfer-pin');
    if(pin==='1234'){
     alert(`
      balance transfer success ${transbalance} taka 
      to ${transfernumber}
      at ${new Date()}
      `)
     setValue(newbalance);

     //add transaaction history
     
     //catch the history container
     const history=document.getElementById('history-container');
     //create a div history
     const newhistory=document.createElement('div');
     //create a html in newhistory
     newhistory.innerHTML=`
      <div class="transacton-card p-5 bg-base-100">
      transfer ${transbalance} taka successfully to ${transfernumber} 
        at ${new Date()}
     </div>
     `
     //appned the child ih history
     history.appendChild(newhistory)

     return;
    }
  else{
   alert('invalid pin')
  }

})