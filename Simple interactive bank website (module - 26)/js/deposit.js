document.getElementById('btn-deposit').addEventListener('click', function() {
    // get the deposit amount from the deposit input field
    // For input field use .valie to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
    
    // step-3: get the current deposit total amount
    // for non-input(element other than input, text area) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = PreviousDepositTotal + NewDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString); 

    // step-6: calculate current total balance
    const currentBalanceTotal = PreviousBalanceTotal + NewDepositAmount; 

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})