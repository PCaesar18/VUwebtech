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
            $('#records_table').append(trHTML);
        }
    });
});

$(document).ready(
                    function()
                    {
                      $("#submit").click(
                                  function()
                                            {
                                              $.ajax(
                                                      {
                                                        type: 'GET',
                                                        url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
                                                        dataType: 'json',
                                                        succes  : function(data)
                                                        {
                                                          alert("You succesfully submitted data");
                                                          $("#testresult").html(data);
                                                        }
                                                      }
                                                    );

                                              }
                                            );
                      }
                    );

$(document).ready(function(){

    $.ajax({
        url: "https://wt.ops.labs.vu.nl/api18/f47cbdfe",
        type: "POST",
        dataType:"json",
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

            $('#records_table').append(trHTML);
        }
    });
});
