/**
 * Created by mypc on 04.08.2016.
 */


"use strict";

$(document).ready(function(){

/*
    var array=[1,4,8,9];

    add(array);
*/



    var object={

        value1:12,
        value2:23


    };


    add(object);




});
/*
function add(values){

    $("body").append(values[0]+values[1]+values[2]+values[3]);


}

*/

    function add(values){

        $("body").append(values.value1+values.value2);

    }


