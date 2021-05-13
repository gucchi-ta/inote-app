// $(function() {
// 画像読み込み完了後に実行
$(window).on('load scroll', function() {
  // // 差し替えダミー画像を先に読み込むためにdelay
  // setTimeout(function(){
    allFunction();
  // }, 50);
});
$(function() {
  $(window).resize(function() {
    allFunction();
  });
});

var gridArray = [],
    colWidth,
    offsetX = 7,    // 横方向の隙間
    offsetY = 0,   // 縦方向の隙間
    numOfCol = 6,
    elements,
    winObject;

function allFunction() {
  elements = $('.post-grids-container');
  winObject = $(window);
  responsiveGrid();
  var containerWidth;
  // var winWidth = winObject.width() - offsetX * 2;
  var winWidth = winObject.width();
  if(winWidth < colWidth * numOfCol) {
      setCol();
      containerWidth =  colWidth * (numOfCol - 1);
  } else if (winWidth > colWidth * (numOfCol + 1)) {
      setCol();
      containerWidth =  colWidth * (numOfCol + 1);
  }
  var current = elements.width();
  setCol();
  applyPinterestGrid();
  elements.width(colWidth * numOfCol);
};

// Pinterest風グリッドレイアウト適用
function applyPinterestGrid() {
  // 最初にgridArrayを初期化
  gridArray = [];
  // 空のgridArrayを作成する
  for (var i=0; i<numOfCol; i++) {
      pushGridArray(i, 0, 1, -offsetY);
  }

  $('.grid').each(function(index) {
      setPosition($(this));
  });

  //最後にエレメントの高さを設定
  var heightarr = getHeightArray(0, gridArray.length);
  elements.height(heightarr.max + offsetY);
}

// カラムの数とwidthを設定する
function setCol() {
  colWidth = $('.grid').outerWidth() + offsetX * 2;
  // numOfCol = Math.floor((winObject.width() - offsetX * 2) / colWidth);
  numOfCol = Math.floor((winObject.width()) / colWidth);
  if(numOfCol <= 6) {
  } else {
    numOfCol = 6
  }
}

// gridArrayに新しいgridを追加
function pushGridArray(x, y, size, height) {
    for (var i=0; i<size; i++) {
        var grid = [];
        grid.x = x + i;
        grid.endY = y + height + offsetY * 2;

        gridArray.push(grid);
    }
}

// gridArrayから指定したx位置にあるgridを削除
function removeGridArray(x, size) {
    for (var i=0; i<size; i++) {
        var idx = getGridIndex(x + i);
        gridArray.splice(idx, 1);
    }
}

// gridArray内にある高さの最小値と最大値および最小値のあるx値を取得
function getHeightArray(x, size) {
    var heightArray = [];
    var temps = [];
    for (var i=0; i<size; i++) {
        var idx = getGridIndex(x + i);
        temps.push(gridArray[idx].endY);
    }
    heightArray.min = Math.min.apply(Math, temps);
    heightArray.max = Math.max.apply(Math, temps);
    heightArray.x = temps.indexOf(heightArray.min);

    return heightArray;
}

// gridのx値を基準にgridのインデックスを検索
function getGridIndex(x) {
    for (var i=0; i<gridArray.length; i++) {
        var obj = gridArray[i];
        if (obj.x === x) {
            return i;
        }
    }
}

// gridを配置
function setPosition(grid) {
    if(!grid.data('size') || grid.data('size') < 0) {
        grid.data('size', 1);
    }

    // gridの情報を定義
    var pos = [];
    var tempHeight = getHeightArray(0, gridArray.length);
    pos.x = tempHeight.x;
    pos.y = tempHeight.min;

    var gridWidth = colWidth - (grid.outerWidth() - grid.width());


    grid.css({
      'left': pos.x * colWidth + offsetX,
      'top': pos.y,
      'position': 'absolute'
    });
    // if (window.matchMedia('(max-width: 480px)').matches) {
    // } else if (window.matchMedia('(max-width: 279px)').matches) {
    // }

    // gridArrayを新しいgridで更新
    removeGridArray(pos.x, grid.data('size'));
    pushGridArray(pos.x, pos.y, grid.data('size'), grid.outerHeight());
}

// レスポンシブ時のgridのwidthを更新
function responsiveGrid() {
  if (window.matchMedia('(max-width: 279px)').matches) {
    $('.grid').css({
      'width': ($(window).width() - (7 * 2))
    });
    $('.post-grids-container').css({
      'width': $(window).width(),
      // 'margin': '0'
    });
  } else if (window.matchMedia('(max-width: 480px)').matches) {
    $('.grid').css({
      'width': ($(window).width() - (7 * 4)) / 2
    });
    $('.post-grids-container').css({
      'width': $(window).width(),
      // 'margin': '0'
    });
  } else {
    $('.grid').css({
      'width': 236
    });
    $('.post-grids-container').css({
      // 'width': 'auto',
      // 'margin': '0 auto'
    });
  }
};



//IE用にArray.indexOfメソッドを追加  // ※補足4
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }

        for (; from < len; from++) {
            if (from in this && this[from] === elt) {
                return from;
            }
        }
        return -1;
    };
}
// });