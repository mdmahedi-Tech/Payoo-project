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
