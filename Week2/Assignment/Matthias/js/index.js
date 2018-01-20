var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://wt.ops.labs.vu.nl/api18/f47cbdfe');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();

});

function renderHTML(data) {
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    htmlString +=
    "<td>" + data[i].image + "</td>"
    "<td>" + data[i].brand + "</td>"
    "<td>" + data[i].model + "</td>"
    "<td>" + data[i].os + "</td>"
    "<td>" + data[i].screensize + "</td>";

  }


  animalContainer.insertAdjacentHTML('afterbegin', htmlString);
}
