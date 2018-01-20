$(document).ready(function()
    {
        $('a').click(function(event){
            var id = $(this).parent().parent().attr('id'); //get id of referent tr
            $('input[name="editvalue"]').attr('id',id); // insert id on input submit
        });

        $('#form_edit').submit(function(event)
        {
            event.preventDefault();
            id = $('input[name="editvalue"]').attr('id'); // get id of input submit
            brand = $('input[name="brand"]').val(); // get value of input text brand
            //value2 = $('input[name="value2"]').val(); // get value of input text value2

            $.ajax({ // Send request
                type: 'post',
                url: 'https://wt.ops.labs.vu.nl/api18/f47cbdfe',
                data: {id: id, brand: brand, value2:value2}, //Values 1 and 2 and Id referent

                cache: false,
                success: function(response){
                    if(response=="success"){ // updaterow return "success" or echo "success"
                        $('#1 td:nth-child(1)').text(brand);
                        //$('#1 td:nth-child(2)').text(value2);
                    }
                },
             });
         });
    });
