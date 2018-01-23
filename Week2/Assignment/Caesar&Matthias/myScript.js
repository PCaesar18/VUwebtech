<<<<<<< HEAD
/*First we submit some data in the form
var form = $('#submitform');
form.submit(function(e){
  e.preventDefault();
  $.ajax({
  url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
  type: "POST",
  data: form.serialize(),
  contentType: "application/json",
  complete: callback
  });
});
});
*/
//appearently we need the bottom of this for the table to even render

/*this should enable us for the response to be handled correctly*/
//this loads html content from the VU into the table
//the webpage only updates upon releading because only then the .ready function is called
=======
//this loads html content from the VU into the table onload, send, reset
>>>>>>> e08ddc5574050de36238a02bff5791daa6b539d7
$(document).ready(function()
{
    $.ajax({
      //ajax request with paramaters to get a json file from the VU
        url: 'https://wt.ops.labs.vu.nl/api18/f47cbdfe',
        type: 'GET',
        dataType:'json',
        success: function (response)
        {
          var trHTML = '';
          $.each(response, function (key,value) {
             trHTML +=
             '<tr><td>' + value.brand +
             '</td><td>' + value.model +
             '</td><td>' + value.os +
             '</td><td><img src="' + value.image +
             '"></td><td>' + value.screensize +
             '</td></tr>';
          });
<<<<<<< HEAD
            $('#myTable').append(trHTML);
            //append to table named myTable the string trHTML
        }
    });
});

$(document).ready(function(){
    $("#reset").click(function(event){
      event.preventDefault(); //this prevents the submit button to redirect us to the database page
        $.get("https://wt.ops.labs.vu.nl/api18/f47cbdfe/reset", function(){
            alert("Your database is reset!"); //a small alert to warn the user that the database is reset
        });
    });
});
=======
>>>>>>> e08ddc5574050de36238a02bff5791daa6b539d7

            $('#myTable').append(trHTML);
        }
    });
<<<<<<< HEAD
});



/*
$(document).ready(function() {
        var form = $("#myForm");

        $("#myform").submit(function(e) {
            e.preventDefault();
            $.ajax({
            url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            complete: callback
            });
        })
    })



<<<<<<< HEAD
/*
$('a').click(function () {
    // custom handling here
    return false;
});

$('submit').submit(function(event) {$.ajax({
url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
type: "POST",
data: JSON.stringify(data),
contentType: "application/json",
complete: callback
});
})
=======
    $('form').submit(function(event) { //Trigger on form submit
        //Validate fields if required using jQuery
        var postForm = $('form').serialize();

        $.ajax({ //Process the form using $.ajax()
            type      : 'POST', //Method type
            url       : 'https://wt.ops.labs.vu.nl/api18/f47cbdfe',
            //Your form processing file URL
            data      : postForm, //Forms name
            dataType:"json",
            success: function (response)
            {
              $.get(response.URI, function(value){
                var trHTML = '';
                   trHTML +=
                   '<tr><td>' + value.brand +
                   '</td><td>' + value.model +
                   '</td><td>' + value.os +
                   '</td><td><img src="' + value.image +
                   '"></td><td>' + value.screensize +
                   '</td></tr>';
                  $('#myTable').append(trHTML);
              })
            }
        });
        event.preventDefault(); //Prevent the default submit
    });
    $("#reset").click(function(){ //resets the database
        $.get("https://wt.ops.labs.vu.nl/api18/f47cbdfe/reset",function(response){
>>>>>>> e08ddc5574050de36238a02bff5791daa6b539d7


              alert("Your database is reset! Please reload the page");


<<<<<<< HEAD
/*
$("#submit").on('click', function(e){
    e.preventDefault();
=======
$("#submit").submit(function(e){
    return false;
>>>>>>> 5fa94500e8080eb2ff15d0f27715d1c42cd86c1c
    $.ajax({
    url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    complete: callback
    });
});

/*
$('a').click(function () {
    // custom handling here
    return false;
});
*/

//reset function


/*
    $('#submit').click(function(e){
      return false;



      $.ajax({
      url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
      type: "POST",
      data: JSON.serialize(data),
      contentType: "application/json",
      complete: callback
      });
      /*
      $.ajax({
        type: 'post',
        url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
        dataType: 'json',
        succes  : function(data){
          alert("You succesfully submitted data");
          $("#testresult").html(data);
        }});
        */

  //  });

=======
        });
    });
});
>>>>>>> e08ddc5574050de36238a02bff5791daa6b539d7
//this was sourced from stackoverflow https://stackoverflow.com/questions/31074532/using-jquery-to-build-table-rows-from-ajax-response-not-with-static-json-data

//Sorting
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
}//this code was sourced from https://www.w3schools.com/howto/howto_js_sort_table.asp
