// スクロール時にヘッダー移動/高さ変更
$(function() {
  var headNav = $(".top-page-header");
  var spHeadNav = $(".sp-top-page-header");
  // 「startPos」 ＝ 直前までのスクロールの値
  var startPos = 0,winScrollTop = 0;
  //scrollだけだと読み込み時困るのでloadも追加
  $(window).on('load scroll', function () {
    // 「winScrollTop」 ＝ 現在のスクロールの値
    winScrollTop = $(this).scrollTop();
    // ディスプレイ幅720px以下の時のみ出し入れ
    if (window.matchMedia('(max-width: 720px)').matches) {
      // 「winScrollTop >= startPos」すなわち下スクロール時にhideクラスを追加、逆に上スクロールじに削除
      if (winScrollTop >= startPos) {
        // 少しスクロールしてから消えるように、「200px以上スクロール空いている場合」という条件を追加
        if(winScrollTop >= 200){
          headNav.addClass('hideUp');
          spHeadNav.addClass('hideDown');
        }
      } else {
        headNav.removeClass('hideUp');
        spHeadNav.removeClass('hideDown');
      }
      // startPosを最新のスクロール値に更新
      startPos = winScrollTop;
    } else {
      headNav.removeClass('hideUp')
      spHeadNav.removeClass('hideDown');
    }
  });
});
function Hide(){
  
}
// //スクロール時にヘッダー移動/高さ変更

// スクロール中のみheaderにクラスin-scrollを付与し、アニメーション速度設定を付与
$(function() {
  var headNav = $(".top-page-header");
  var spHeadNav = $(".sp-top-page-header");
  var timeoutId ;
  $(window).on('scroll', function () {
    // ディスプレイ幅720px以下の時のみ付与
    if (window.matchMedia('(max-width: 720px)').matches) {
      headNav.addClass('in-scroll');
      spHeadNav.addClass('in-scroll');
      // スクロールを停止して100ms後に終了とする
      clearTimeout( timeoutId ) ;
      timeoutId = setTimeout( function () {
        headNav.removeClass('in-scroll');
        spHeadNav.removeClass('in-scroll');
      }, 1000 ) ;
    }
  });
});
// //スクロール中のみheaderにクラスin-scrollを付与し、アニメーション速度設定を付与

// 80px以上スクロール時ヘッダーに影を付与
$(function() {
  var headNav = $(".top-page-header");
  var spHeadNav = $(".sp-top-page-header");
  //scrollだけだと読み込み時困るのでloadも追加
  $(window).on('load scroll', function () {
    // 「winScrollTop」 ＝ 現在のスクロールの値
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 80) {
      headNav.addClass('header-shadow');
      spHeadNav.addClass('header-shadow');
    } else {
      headNav.removeClass('header-shadow');
      spHeadNav.removeClass('header-shadow');
    }
    // startPosを最新のスクロール値に更新
    startPos = winScrollTop;
  });
});
// //80px以上スクロール時ヘッダーに影を付与


// sp-headerを表示/非表示
$(function() {
  $('.sp-nav').clickToggle(function () {
    // １回目のクリック
    // $('.sp-top-page-header').css({'display': 'flex'})
    $('.sp-top-page-header').css('display', 'none')
  }, function () {
    // ２回目のクリック
    // $('.sp-top-page-header').css('display', 'none')
    $('.sp-top-page-header').css({'display': 'flex'})
  });
});
// //sp-headerを表示/非表示

// clickするごとに交互に処理を行う関数
$.fn.clickToggle = function (a, b) {
  return this.each(function () {
    var clicked = false;
    $(this).on('click', function () {
      clicked = !clicked;
      if (clicked) {
        return a.apply(this, arguments);
      }
      return b.apply(this, arguments);
    });
  });
};