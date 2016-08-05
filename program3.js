
"use strict";
$(document).ready(function () {

   /* var x ={value:5};

    var y = x;

    x.value=10;

    $("body").append(x.value);
    $("body").append("<br>");
    $("body").append(y.value);


*/

/*
   var x =[5];

    var y=x;

    x[0]=10;

    $("body").append(x[0]);
    $("body").append("<br>");
    $("body").append(y[0]);

*/

/*
    var x=10;

    test(x);

    $("body").append("<br>");

    $("body").append(x);

*/




    var x={value:7};




    test(x);

    $("body").append("<br>");


    $("body").append(x.value);



});

/*
function test(param){

    param=13;

    $("body").append(param);

}
*/


    function test(param){

        param.value=10;

        $("body").append(param.value);


    }



