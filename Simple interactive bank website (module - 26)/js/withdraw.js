/* 
1. add eventhandler with the withdraw btn
2. get the withdraw amount from the withdraw input field
2.5: also make sure to convert the input into a number by using parsefloat
3. get previous withdraw total
4. calculate total withdraw amount
5. set total withdraw amount
6. get the previous balance total
6.5: calculate and set new balance total
7. clear the input field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function() {
   
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value; 
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-3
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

    // step-5
    withdrawtotalElement.innerText = currentWithdrawTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);

    const newBalanceTotal = PreviousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    withdrawField.value = '';
})