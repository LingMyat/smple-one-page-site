$(document) .ready(function() {

    $('.js-a1').click(function name(params) {
        $('html,body').animate({scrollTop: $('.js--section1').offset().top },
        1000);
    })

    $('.js-a2').click(function name(params) {
        $('html,body').animate({scrollTop: $('.js--section2').offset().top },
        1000);
    })

    $(".js--menu-icon").click(function() {
      $(".menu").slideToggle(200)

      if ($(".js--menu-icon i").hasClass("fa-bars")) {
        $(".js--menu-icon i").addClass(("fa-times"),1000)
        $(".js--menu-icon i").removeClass(("fa-bars"),1000)
      } else {
        $(".js--menu-icon i").addClass(("fa-bars"),1000)
        $(".js--menu-icon i").removeClass(("fa-times"),1000)
      }
    })
//<i class="fas fa-times"></i>
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});

const customer=[
  {
    name: "p1",
    ph: "12345678",
    email:"p1@gmail.com",
    dateOfBirth:"01.01.2000"
  },
  {
    name: "p2",
    ph: "23456789",
    email:"p2@gmail.com",
    dateOfBirth:"01.02.2000"
  },
  {
    name: "p3",
    ph: "12345679",
    email:"p3@gmail.com",
    dateOfBirth:"01.01.2001"
  }
]
const sendEmail = (email) => {
  console.log ('send email to',email)
}
for (let index = 0; index < customer.length; index++) {
  let customerEmail= customer[index];
  sendEmail(customerEmail)
  
}