


// Navigation menu
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu-nav-screen").fadeToggle(500);
    $(".top-burger").toggleClass("top-burger-animate");
    $(".mid-burger").toggleClass("mid-burger-animate");
    $(".bottom-burger").toggleClass("bottom-burger-animate");
    $(".logo-black").toggleClass("logo-white");
    $(".absolute-logo-left").toggleClass("fixed-logo-left");
    $(".absolute-hamburger").toggleClass("fixed-hamburger");
  });
});




// TABS
jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});

