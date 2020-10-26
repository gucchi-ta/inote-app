require("jquery");

function showMenu() {
  const indexArrow = document.getElementsByClassName("index-arrow");
  const indexImg = document.getElementsByClassName("post-img-content");
  const keyword = document.getElementById("user-nickname");
  let num = indexArrow.length
  for (i = 0; i < num; i++){
    // console.log( indexArrow[i]);
    console.log( indexImg[i]);
    indexArrow[i].addEventListener("mouseover", () => {
      console.log("ok");
      const html = `<p>削除</p>`;
      // indexImg[i].insertAdjacentHTML("beforeend", html);
      keyword.insertAdjacentHTML("beforeend", html);

    });
  }
  // keyword.addEventListener("mouseover", () => {
  //   console.log("key");
  // });
};

window.addEventListener("load", showMenu);