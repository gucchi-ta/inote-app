$('.fade-in-display').css('visibility','hidden')
$('.grid').css('visibility','hidden')

$(window).on('load', function(){
  $(".fade-in-display").addClass('fadeInDisplay001');
})

$(window).on('scroll load', function(){
  // グリッド配置値後0.01秒後に読み込み
  setTimeout(function(){
    fadeInDisplay();
  }, 100);
});
$(function() {
  $(window).resize(function() {
    // グリッド配置値後0.01秒後に読み込み
    setTimeout(function(){
      fadeInDisplay();
    }, 100);
  });
});

function fadeInDisplay () {
  var windowHeight = $(window).height(),
  topWindow = $(window).scrollTop();
  $('.grid').each(function(){
    var targetPosition = $(this).offset().top;
    var targetPositionBottom = $(this).offset().top + $(this).outerHeight();
    if ((topWindow > targetPosition - windowHeight - 80) && (topWindow < targetPositionBottom - 160 )){
      $(this).addClass("fadeInDisplay1");
    }
  });
};