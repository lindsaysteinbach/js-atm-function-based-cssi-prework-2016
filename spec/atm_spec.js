$(document).ready(function(){

  describe("Completing a transaction", function() {

    it ("should hide the submit button and input field before deposit or withdrawl is selected", function() {
      expect($('#amount')).toBeHidden();
    });
      
    it ("should validate that a user's input isn't empty", function() {
      $('#amount').val("");
      $("[type='submit']").click();
      expect($('#balance').text()).toBe('Fool don\'t be playin!');
    });

    it ("should validate that a user's input is a number", function() {
      $('#amount').val(NaN);
      $("[type='submit']").click();
      expect($('#balance').text()).toBe('Fool don\'t be playin!');
    });

    it ("should add and display the amount if the user selects deposit", function() {
      $('#choice').val('deposit').change();
      $('#amount').val(100);
      $("[type='submit']").click();
      expect($('#balance').text()).toBe('balance: $100');
    });

    it ("should subtract and display the amount if the user selects withdrawl", function() {
      $('#choice').val('withdrawal').change();
      $('#amount').val(100);
      $("[type='submit']").click();
      expect($('#balance').text()).toBe('balance: $0');
    });
  
  });

});
