function hert() {
  const herts = document.querySelectorAll(".hert-icon-box");
  // 取得した要素それぞれに対して関数実行
  herts.forEach(function (aHert) {
    aHert.addEventListener("click", () => { 
      const hertId = aHert.getAttribute("data-hert-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${hertId}/hert`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        // console.log(XHR.response);
        const item = XHR.response.post;
        // 更新されたhertの真偽で"data-hert-check"属性の値を変更し、それぞれの場合で画像のCSSをdisplay:noneかdisplay:blockに設定
        if (item.hert === true) {
          aHert.setAttribute("data-hert-check", "true");

        } else if (item.hert === false) {
          aHert.setAttribute("data-hert-check", "false");
        }
      };
    });
  });
}
window.addEventListener("load", hert);