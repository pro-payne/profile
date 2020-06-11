(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('#contact-me').submit(function(event) {
    event.preventDefault();

    const form = $(this).serialize()
    const btn = $('#send-btn')
    
    $.ajax({
      url: './email.php',
      method: 'post',
      dataType: 'json',
      data: form,
      beforeSend: function(){
        btn.attr('disabled', true)
        btn.html('Sending...')
      },
      error: function(){
        btn.attr('disabled', false)
        btn.html('Send')        
      },
      success: function(response){
        if(response.success){
          btn.html('Sent');
          setTimeout(function(){
            btn.html("Send")
          }, 2000)
        }else{
          btn.html("Send")
          btn.attr('disabled', false)
        }
      }
    })
  })

})(jQuery); // End of use strict
