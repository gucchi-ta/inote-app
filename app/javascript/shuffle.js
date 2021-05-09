// function shuffleContent(container) {
//   console.log("ok2")
//   var content = container.find("> *");
//   var total = content.length;
//   content.each(function() {
//     content.eq(Math.floor(Math.random() * total)).prependTo(container);
//   });
// }

// $(function() {
//   console.log("ok1")
//   shuffleContent($(".everyone-grid-container"));
//   // console.log($(".everyone-grid-container"))
// });

$(function() {
const imgs = document.getElementsByClassName('show-index-img');
const imgLength = imgs.length;

// const imgNo = Math.floor( Math.random() * imgs.length)
// console.log(imgNo);

var randomsCheck = [];
var min = 0, max = imgLength;
for (let num = 0; num < max; num++) {
  var ranNom = intRandom(min, max)
  console.log(ranNom);
  if(randomsCheck.includes(ranNom)){}else{
    randomsCheck.push(ranNom);
    break;
  }
  imgSrc = imgs[num].getAttribute("src")
  console.log(imgSrc);
  imgRanSrc = imgs[ranNom].getAttribute("src")
  console.log(imgRanSrc);
  imgs[num].setAttribute("src", imgRanSrc)
}
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

});