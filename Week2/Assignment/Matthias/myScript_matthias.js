$(document).ready(function()
{
    $.ajax({
        url: 'https://wt.ops.labs.vu.nl/api18/f47cbdfe',
        type: 'get',
        dataType:'json',
        success: function (response)
        {
          var trHTML = '';
          $.each(response, function (key,value) {
             trHTML +=
               '<tr><td>' + value.brand +
               '</td><td>' + value.model +
               '</td><td>' + value.os +
               '</td><td>' + value.image +
               '</td><td>' + value.screensize +
               '</td></tr>';
          });
            $('#myTable').append(trHTML);
        }
    });
});

$(document).ready(function()
{
    $.ajax({ //ajax method to get JSON file from server and post it
        url: "getjson.php",
        type: "POST",
        dataType:"json",
        success: function (response)
        //if the reply is succesful then
        {
          var trHTML = '';
          //createa  variable trHTML
          $.each(response, function (key,value) {
            //for each key value pair in the JSON file concat the key value pair and HTML tags and set those equal to trHTML
             trHTML +=
                '<tr><td>' + value.brand +
                '</td><td>' + value.model +
                '</td><td>' + value.os +
                '</td><td>' + value.image +
                '</td><td>' + value.screensize +
                '</td></tr>';
          });

            $('#myTable').append(trHTML);
            //append trHTML to our records table
        }
    });
});

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

$(document).ready(function(){
    $("#reset").click(function(){
        $.get("https://wt.ops.labs.vu.nl/api18/f47cbdfe", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
