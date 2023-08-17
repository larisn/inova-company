
const inputFile = document.getElementById("file");
const label = document.querySelector(".container-input-file label");

inputFile.addEventListener("change", function () {
  if (inputFile.files.length > 0) {
    label.textContent = inputFile.files[0].name;
  } else {
    label.textContent = "Envie seu currículo";
  }
});

