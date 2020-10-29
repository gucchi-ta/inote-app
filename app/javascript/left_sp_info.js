// 「.arrow_bk-icon」をクリックすると交互に「style="display: block"」と「style="display: none"」を繰り返す
$(function() { 
  $(window).on('load', function() {
      var clicked = false;
      $('.arrow_bk-icon').on('click', function() {
        const leftSpInfoBox = document.getElementsByClassName("left-sp-info-box");
        clicked = !clicked;
        if (clicked) {
          leftSpInfoBox[0].setAttribute("style", "display: block");
        }else {
          leftSpInfoBox[0].setAttribute("style", "display: none");
        }
      });
  });
});