
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://wt.ops.labs.vu.nl/api18/f47cbdfe');


ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("we conencted but it returna  error");
  }
};

ourRequest.onerror = function() {
  console.log("connection error");

};
ourRequest.send();

function createHTML(phoneData) {
  console.log("testing from our function");
  console.log(phoneData);
}
