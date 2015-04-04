require('jquery');
require('bootstrap-sass');
require('fitvids');


/******************** GA pageview ********************/
// TODO: extract this out
/*****************************************************/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-28630641-1', 'auto');
ga('send', 'pageview');




$(function() {
  $('.vidContainer').fitVids();
});




$('form.contact-form').on('submit', function() {
  $('.form-error').remove();

  var validated = true;

  //validation
  $(this).find("input[type=text], input[type=email], textarea").each( function(index) {
    if($(this).val() == '') {
      $('form').prepend('<p class="form-error">Please fill in all fields. ;)</p>');
      validated = false;
      return false;
    }
  });

  if( !validated ) return false;

  $.ajax({
      data: $(this).serialize(),
      dataType: 'jsonp',
      type: $(this).attr('method'),
      url: 'https://getsimpleform.com/messages/ajax?form_api_token=0fbbe2615b633f2c158f18c39812ca3e'
  })
  .done(function() {
    $('form.contact-form').replaceWith('<h2 style="text-align:center; margin-top:1em">Thanks for contacting us. We will get back to you shortly.</h2>');
    $('form.contact-form').find("input[type=text], input[type=email], textarea").val("");
  });

  return false;
});