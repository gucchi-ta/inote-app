function selectFile() {
  if (document.getElementById("upfile").value === ""){
      document.getElementById("img-submit").disabled = true;
  }
  else {
      document.getElementById("img-submit").disabled = false;
  }
}

// window.addEventListener("load", selectFile);