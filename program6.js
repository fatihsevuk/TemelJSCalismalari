
$(document).ready(function () {

  /*  var kisi=[

        {isim:"ali" , yas:20},
        {isim:"veli" , yas:25},
        {isim:"ayse" , yas:32},
        {isim:"fatma" , yas:19}


    ];

*/

   /* for(var i=0;i<kisi.length;i++){

        $("body").append(kisi[i].isim+" "+kisi[i].yas+" yasında."+"<br>" );


    }

*/
  /*  var i=0;

   while(i<kisi.length){


       $("body").append(kisi[i].isim+" "+kisi[i].yas+" yasında."+"<br>" );

       i++;



   }
*/

    var toplam=0;

    var i=0;

    while(toplam<50){

        $("body").append(i);
        $("body").append("<br>");


        i++;
        toplam+=i;


    }




});