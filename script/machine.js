console.log('machine connected')
//machine->value
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
   console.log(id,value)
    return value;
}

//machine->balance
function currentBalance(){
const ballanceElement=document.getElementById('balance');
const balance=ballanceElement.innerText;
console.log('current balance',Number(balance));
return Number(balance);
}
// machine value to setvalue
function setValue(value){
    const ballanceElement=document.getElementById('balance');
    ballanceElement.innerText=value;
}
 //machine to hide all and show id
 function showOnly(id){
    
    const addmoney=document.getElementById('addMoney');
    const cashout=document.getElementById('cashout');
     const history=document.getElementById('history');
     const transfer=document.getElementById('transfer');
     const payBill=document.getElementById('payBill');
    //   console.log(`addmoney${addmoney} and cashout ${cashout}`)
    //hide to all
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transfer.classList.add('hidden');
    payBill.classList.add('hidden');

    // show only id wala
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');
 }
