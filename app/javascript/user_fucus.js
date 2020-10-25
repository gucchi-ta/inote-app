function userFocus() {
  const inputDefault = document.getElementsByClassName("input-default")
  const userBirthday1 = document.getElementById("user_birthday_1i")
  const userBirthday2 = document.getElementById("user_birthday_2i")
  const userBirthday3 = document.getElementById("user_birthday_3i")

  let num = inputDefault.length
  for (var i = 0; i < num; i++){
    inputDefault[i].addEventListener('click', () => {
      console.log("ok");
    });
  }
  userBirthday1.addEventListener('click', () => {
    console.log("ok1");
  });
  userBirthday2.addEventListener('click', () => {
    console.log("ok2");
  });
  userBirthday3.addEventListener('click', () => {
    console.log("ok3");
  });
};

// window.addEventListener("load", userFocus);