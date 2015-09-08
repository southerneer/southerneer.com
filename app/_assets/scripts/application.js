require('jquery');
require('bootstrap-sass');


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
  $('.hero-bg h1').fadeIn(5000);

  $('.vidContainer').fitVids();
});

$('.site-logo-link').hover(function() {
  $(this).find('img').attr('src', '/assets/images/main_logo_flipped.png');
}, function() {
  $(this).find('img').attr('src', '/assets/images/main_logo.png');
})