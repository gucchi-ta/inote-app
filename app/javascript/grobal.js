function grobal() {
  
  const grobals = document.querySelectorAll(".grobal-icon-box");
  grobals.forEach(function (aGrobal) {
    aGrobal.addEventListener("click", () => { 
      const grobalId = aGrobal.getAttribute("data-grobal-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${grobalId}/grobal`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        // console.log(XHR.response);
        const item = XHR.response.post;
        // 更新されたhertの真偽で"data-grobal-check"属性の値を変更し、それぞれの場合で画像のCSSをdisplay:noneかdisplay:blockに設定
        if (item.grobal === true) {
          aGrobal.setAttribute("data-grobal-check", "true");

        } else if (item.grobal === false) {
          aGrobal.setAttribute("data-grobal-check", "false");
        }
      };
    });
  });
}
window.addEventListener("load", grobal);