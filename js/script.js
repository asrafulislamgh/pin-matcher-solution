function generatePin() {
  const display = document.getElementById("display-pin");
  let generatedPin = Math.round(Math.random() * 100000);
  generatedPin = generatedPin + "";
  if (generatedPin.length == 5) {
    display.value = generatedPin;
  }
}
function pinChecker(pressedKey) {
  const typedNumber = document.getElementById("typed-numbers");

  if (isNaN(pressedKey.innerText)) {
    console.log("Not a number");
    if (pressedKey.innerText == "C") {
      typedNumber.value = "";
    } else if (pressedKey.innerText == "<") {
      let displayValue = typedNumber.value;
      displayValue.slice(0, -1);
      console.log(displayValue);
    }
  } else {
    typedNumber.value = typedNumber.value + pressedKey.innerText;
  }
}
function verifyPin() {
  const typedNumber = document.getElementById("typed-numbers").value;
  const displayPin = document.getElementById("display-pin").value;
  const notifyFail = document.getElementById("notify-fail");
  const notifySuccess = document.getElementById("notify-success");
  notifyFail.style.display = "none";
  notifySuccess.style.display = "none";
  if (typedNumber == displayPin) {
    notifySuccess.style.display = "block";
  } else {
    notifyFail.style.display = "block";
  }
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  pinChecker(event.target);
});
