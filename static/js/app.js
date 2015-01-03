



$(function() {
  // Handler for .ready() called.
  
  $(".navbar a").click(function(e) {
    e.preventDefault();
    
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 500, function(){});
  });
  
  
});