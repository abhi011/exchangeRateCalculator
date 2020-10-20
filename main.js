const currencyEl_one=document.getElementById('currency-one');
const currencyEl_two=document.getElementById('currency-two');
const amountEl_one=document.getElementById('amount-one');
const amountEl_two=document.getElementById('amount-two');
const rateEl=document.getElementById('rate');
const swap=document.getElementById('swap');
function calculate(e){
    console.log('changed');
    const currency_one=currencyEl_one.value
    const currency_two=currencyEl_two.value




fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
.then(res=>res.json())
.then(data=>{console.log(data.rates)
    const rates= data.rates[currency_two];
rateEl.innerHTML=`1 ${currency_one} = ${rates}${currency_two}`
console.log(amountEl_one.value);
console.log(amountEl_two.value);
amountEl_two.value=(amountEl_one.value*rates).toFixed(2);
})
}
function swapCurrency(e){
console.log(currencyEl_two.innerHTML);
const temp=currencyEl_two.value;
currencyEl_two.value=currencyEl_one.value;
currencyEl_one.value=temp;
console.log(currencyEl_one);
calculate()
}
currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click',swapCurrency);

calculate();

