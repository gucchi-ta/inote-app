function favorite() {
  const favorites = document.querySelectorAll(".favorite-icon-box");
  // 取得した要素それぞれに対して関数実行
  favorites.forEach(function (afavorite) {
    afavorite.addEventListener("click", () => { 
      const favoriteId = afavorite.getAttribute("data-favorite-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${favoriteId}/favorite`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        // console.log(XHR.response);
        const item = XHR.response.post;
        // 更新されたfavoriteの真偽で"data-favorite-check"属性の値を変更し、それぞれの場合で画像のCSSをdisplay:noneかdisplay:blockに設定
        if (item.favorite === true) {
          afavorite.setAttribute("data-favorite-check", "true");

        } else if (item.favorite === false) {
          afavorite.setAttribute("data-favorite-check", "false");
        }
      };
    });
  });
}
window.addEventListener("load", favorite);