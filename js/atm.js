$(function(){

  var balance       =   0.0,
      amountInput   =   $('#amount'),
      balanceArea   =   $('#balance'),
      choiceSelect  =   $('#choice'),
      submitBtn     =   $('#submit'),
      atmForm       =   $('#atm');

    function do_transaction(action) {

      var amount = parseFloat(amountInput.val());

      if (isNaN(amount) || amount === '') {
        balanceArea.text('Fool don\'t be playin!');
      } 
      else {
        if(action === 'deposit') {
          balance += amount;
        } 
        else if (action === 'withdrawal') {
          balance -= amount;
        }
        balanceArea.text('balance: $'+balance);
      }
    }

    atmForm.submit(function() {

      var choice = choiceSelect.val();

      if (choice === 'deposit') {
        do_transaction(choice);
      } 
      else if (choice === 'withdrawal') {
        do_transaction(choice);
      }
      return false;
    });

    ////////// Select Menu Aesthetics //////////

    amountInput.hide();
    submitBtn.hide();

    choiceSelect.change(function() {

      var choice = choiceSelect.val();

      if (choice === 'deposit' || choice === 'withdrawal') {
        amountInput.show().val('');
        submitBtn.show();
      } 
      else {
        amountInput.hide().val('');
        submitBtn.hide();
      }
    });

});