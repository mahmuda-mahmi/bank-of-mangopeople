document.getElementById('btn-deposit').addEventListener('click', function () {
       const deposit = document.getElementById('deposit-input');
       const depositInputString = deposit.value;
       const depositInput = parseFloat(depositInputString);

       const depositNow = document.getElementById('deposit-total');
       const depositValueString = depositNow.innerText;
       const depositValue = parseFloat(depositValueString);
       
       const depositTotal = depositInput + depositValue ;
       depositNow.innerText = depositTotal;

       deposit.value = '';

       const balanceNow = document.getElementById('balance-total');
       const balanceValueString = balanceNow.innerText;
       const balanceValue = parseFloat(balanceValueString);
       const balanceUpdate = balanceValue + depositInput;
       balanceNow.innerText = balanceUpdate;

})