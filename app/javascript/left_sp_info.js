// 「.arrow-bk-icon」をクリックすると交互に「style="display: block"」と「style="display: none"」を繰り返す
$(function() { 
  // $(window).on('load', function() {
    var clicked = false;
    $('.arrow-bk-icon').on('click', function() {
      const leftSpInfoBox = document.getElementsByClassName("left-sp-info-box");
      clicked = !clicked;
      if (clicked) {
        leftSpInfoBox[0].setAttribute("style", "display: block");
      }else {
        leftSpInfoBox[0].setAttribute("style", "display: none");
      }
    });
    $('.arrow-bk-nonlog-icon').on('click', function() {
      const leftSpNonlogInfoBox = document.getElementsByClassName("left-sp-nonlog-info-box");
      clicked = !clicked;
      if (clicked) {
        leftSpNonlogInfoBox[0].setAttribute("style", "display: block");
      }else {
        leftSpNonlogInfoBox[0].setAttribute("style", "display: none");
      }
    });
  // });
});