/* 
1. add event handler with the withdraw button
2. get the withdraw amount 
3. clear the withdraw input field
4. get previous withdraw total 
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new blnce and set it to the balance total element */

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById(withdraw-field);
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})