$(function(){

  //start coding here...

  $("#submit").click(function(e){
    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();
  })
});