function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

function myFunction(x) {
  customToggle(x);
  x.classList.toggle("change");
}

function customToggle(element) {
  console.log(element.parentElement.parentElement.nodeName);
  if (element.parentElement.parentElement.classList.contains('h-14')) {
    element.parentElement.parentElement.classList.remove('h-14');
    element.parentElement.parentElement.classList.add('h-screen');
  }
  else if (element.parentElement.parentElement.classList.contains('h-screen')) {
    element.parentElement.parentElement.classList.remove('h-screen');
    element.parentElement.parentElement.classList.add('h-14');
  }
}

var prevDiv;
var currentDiv;

function divSwap(element) {

}
function helloWorld(element) {
  // console.log(element);
  // element.classList.add("animate-slideFromRight");
  prevDiv = element.parentNode;
  currentDiv = element;
  console.log("prevDiv is:");
  console.log("---------------");
  console.log(prevDiv);
  console.log("currentDiv is:");
  console.log("---------------");
  console.log(currentDiv);
}

// function menuExpand(element){
//   element.classList.add("menuExpand");
// }