$('.t-top').click(function(){
  $('.top').toggleClass('active');
});
$(document).on('click', function(event) {
  if (!$(event.target).closest('.top').length && !$(event.target).closest('.t-top').length) {
    $('.top').removeClass('active');
  }
});
$('.top a').on('click', function() {
  $('.top').removeClass('active');
});

     window.addEventListener('load', () => {
       const loading = document.querySelector('#loading');
       loading.style.display = 'none';
     });
