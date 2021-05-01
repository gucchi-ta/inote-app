// $('.main').css('visibility','hidden')

// $(window).on('load', function(){
//   $(".main").addClass('fadeInDisplay');
// })

$(window).on('scroll load', function(){
  var windowHeight = $(window).height(),
  topWindow = $(window).scrollTop();
  $('.main').each(function(){
    var targetPosition = $(this).offset().top;
    var targetPositionBottom = $(this).offset().top + $(this).outerHeight();
    if ((topWindow > targetPosition - windowHeight + 100) && (topWindow < targetPosition)){
      $(this).addClass("fadeInDisplay");
    } 
  })
})