$(function(){

$('#amount').hide();
$('#submit').hide();


$('#choice').change(function(e){
  if ($(this).val()=="-- select choice --") {
    $('#amount').hide();
    $('#submit').hide();
  }
  else {
    $('#amount').show();
    $('#submit').show();
  }
})

var balance = 0;

  $("#submit").click(function(e){
    var entry = $('#amount').val();

    if ($('#choice').val() == "deposit") {
      balance = balance + parseFloat(entry);
      $('#balance').text("balance: $" + balance);

    }
    else if ($('#choice').val() == "withdrawal") {
      balance = balance - parseFloat(entry);
      $('#balance').text("balance: $" + balance);
    }
  })

  $("#submit").click(function(e){
    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();
  })
});