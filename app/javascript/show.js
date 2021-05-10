// アイコン・メモを配置
// $(function() {
$(window).on('load scroll', function() {
  $(".show-img").css('width', 'auto');
  $(".show-img").css('height', 'auto');
  $(".show-memo").css({'visibility': 'hidden'});
  $(".show-icon-box").css({'visibility': 'hidden'});
  // 差し替えダミー画像を先に読み込むためにdelay
  setTimeout(function(){
    showResize();
  }, 30);
  $(window).resize(function() {
    $(".show-img").css('width', 'auto');
    $(".show-img").css('height', 'auto');
    showResize();
  });
});

function showResize() {
  var showImgWidth = $(".show-img").width();
  var showImgHeight = $(".show-img").height();
  var showBoxWidth = $(".show-box").width();
  var showBoxHeight = $(".show-box").height();
  var windowWidth = $(window).width();
  
  // 画像を要素いっぱいで内接リサイズ
  if ((showImgHeight / showImgWidth) <= (showBoxHeight / showBoxWidth)){
    $(".show-img").css('width', '100%');
    $(".show-img").css('height', 'auto');
  } else {
    $(".show-img").css('width', 'auto');
    $(".show-img").css('height', '100%');
  }

  var showImgWidth = $(".show-img").width();
  var showImgHeight = $(".show-img").height();
  var showBoxMarginLeft = (showBoxWidth - showImgWidth) / 2
  var showLeft =  showImgWidth + showBoxMarginLeft + 28
  var showBoxMarginBottom = (showBoxHeight - showImgHeight) / 2
  var showMemoBottom =  showBoxMarginBottom
  var windowMargin = (windowWidth - showImgWidth) / 2

  var showIconBoxTop =  showBoxMarginBottom
  var showIconBoxTop2 =  showBoxMarginBottom + showImgHeight + 14

  // メモの比較用最大幅を先に指定
  $(".show-memo").css({
    'max-width' : windowMargin - windowWidth * 0.01 - 28
  });
  var showMemoWidth = $(".show-memo").width();
  var showMemoheight = $(".show-memo").height();

  if (showImgWidth - 144 >  showImgWidth * 3 / 4){
    var showMemoWidthJudge = showImgWidth * 3 / 4
  } else {
    var showMemoWidthJudge = showImgWidth - 144
  }

  // メモ配置
  if ((windowMargin > showMemoWidth + 28) 
  && (windowMargin > 26 + 28 + windowWidth * 0.01) 
  && ((showMemoheight < showImgHeight - 144) && (showMemoheight < showImgHeight * 0.45))){
    $(".show-memo").css({
      'max-width' : 'auto',
      'left': showLeft,
      'bottom': showMemoBottom,
      'top': 'auto',
      'padding-bottom': 0,
      'visibility': 'visible'
    });
  } else {
    $(".show-memo").css({
      'max-width' : showMemoWidthJudge,
      'left': showBoxMarginLeft,
      'bottom': 'auto',
      'top': showIconBoxTop2,
      'padding-bottom': 80,
      'visibility': 'visible'
    });
  }

  // アイコン配置
  if ((windowMargin > showMemoWidth + 28) 
  && (windowMargin > 26 + 28 + windowWidth * 0.01) 
  && ((showMemoheight < showImgHeight - 144) && (showMemoheight < showImgHeight * 0.45))){
    $(".show-icon-box").css({
      'left': showLeft,
      'right': 'auto',
      'top': showIconBoxTop,
      'visibility': 'visible'
    });
    $(".show-icon-list").css({
      'display': 'block'
    });
    $(".show-icon").css({
      'margin-bottom': '4px',
      'margin-left': '0'
    });
  } else {
    $(".show-icon-box").css({
      'left': 'auto',
      'right': showBoxMarginLeft,
      'top': showIconBoxTop2,
      'visibility': 'visible'
    });
    $(".show-icon").css({
      'margin-bottom': '0',
      'margin-left': '10px'
    });
    $(".edit-icon").css({
      'margin-left': '0'
    });
    $(".show-icon-list").css({
      'display': 'flex'
    });
  }

  // アイコン情報配置
  if ((windowMargin > showMemoWidth + 28) 
  && (windowMargin > 26 + 28 + windowWidth * 0.01) 
  && ((showMemoheight < showImgHeight - 144) && (showMemoheight < showImgHeight * 0.45))
  && (showBoxMarginLeft > 146 - windowWidth * 0.04)){
    $(".icon-info-edit").css({
      'left': '32px',
      'right': 'auto',
      'top': '1px',
      'bottom': 'auto'
    });
    $(".icon-info-grobal").css({
      'left': '32px',
      'right': 'auto',
      'top': '31px',
      'bottom': 'auto'
    });
    $(".icon-info-hert").css({
      'left': '32px',
      'right': 'auto',
      'top': '61px',
      'bottom': 'auto'
    });
    $(".icon-info-delete").css({
      'left': '32px',
      'right': 'auto',
      'top': '91px',
      'bottom': 'auto'
    });
  } else if ((windowMargin > showMemoWidth + 28) 
  && (windowMargin > 26 + 28 + windowWidth * 0.01) 
  && ((showMemoheight < showImgHeight - 144) && (showMemoheight < showImgHeight * 0.45))){
    $(".icon-info-edit").css({
      'left': 'auto',
      'right': '32px',
      'top': '1px',
      'bottom': 'auto'
    });
    $(".icon-info-grobal").css({
      'left': 'auto',
      'right': '32px',
      'top': '31px',
      'bottom': 'auto'
    });
    $(".icon-info-hert").css({
      'left': 'auto',
      'right': '32px',
      'top': '61px',
      'bottom': 'auto'
    });
    $(".icon-info-delete").css({
      'left': 'auto',
      'right': '32px',
      'top': '91px',
      'bottom': 'auto'
    });
  } else if (showBoxMarginBottom < 86) {
    $(".icon-info-edit").css({
      'left': '-11px',
      'right': 'auto',
      'top': 'auto',
      'bottom': '32px'
    });
    $(".icon-info-grobal").css({
      'left': '12px',
      'right': 'auto',
      'top': 'auto',
      'bottom': '32px'
    });
    $(".icon-info-hert").css({
      'left': '43px',
      'right': 'auto',
      'top': 'auto',
      'bottom': '32px'
    });
    $(".icon-info-delete").css({
      'left': '97px',
      'right': 'auto',
      'top': 'auto',
      'bottom': '32px'
    });
  } else {
    $(".icon-info-edit").css({
      'left': '-11px',
      'right': 'auto',
      'top': '32px',
      'bottom': 'auto'
    });
    $(".icon-info-grobal").css({
      'left': '12px',
      'right': 'auto',
      'top': '32px',
      'bottom': 'auto'
    });
    $(".icon-info-hert").css({
      'left': '43px',
      'right': 'auto',
      'top': '32px',
      'bottom': 'auto'
    });
    $(".icon-info-delete").css({
      'left': '97px',
      'right': 'auto',
      'top': '32px',
      'bottom': 'auto'
    });
  }
};