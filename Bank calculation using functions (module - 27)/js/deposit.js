/* 1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2.5. convert string deposit amount to a number type
3. clear the deposit input field after getting the value
4. get the previous total
5. calculate new deposit total and set the value to the deposit total
6. get current balance
7. calculate the new balance and set it to the kbalance total element*/

document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal; 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalancetotalAmount = parseFloat(previousBalancetotalString);

    // step-7: 
    const newBalanceTotal = previousBalancetotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})