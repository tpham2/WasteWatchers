var simpleData = {'produce': 'Bananas',
                  'producePic': 'images/bananas_coupons.jpg',
                  'barcode': 'images/barcode.png',
                  'expiration': 'January 1st, 2019',
                  'index': 0};

var complexData = [
  {'produce': 'Oranges', 'producePic': 'images/oranges_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 1},
  {'produce': 'Onions', 'producePic': 'images/onions_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 2},
  {'produce': 'Apples', 'producePic': 'images/apples_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 3},
  {'produce': 'Broccoli', 'producePic': 'images/broccoli_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 4},
  {'produce': 'Carrots', 'producePic': 'images/carrots_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019','index': 5},
  {'produce': 'Kiwis', 'producePic': 'images/kiwis_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 6},
  {'produce': 'Pears', 'producePic': 'images/pears_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019','index': 7},
  {'produce': 'Peaches', 'producePic': 'images/peaches_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 8},
  {'produce': 'Corn', 'producePic': 'images/corn_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 9},
  {'produce': 'Potatoes', 'producePic': 'images/potatoes_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 10},
  {'produce': 'Celery', 'producePic': 'images/celery_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 11},
  {'produce': 'Green Beans', 'producePic': 'images/green_beans_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 12},
  {'produce': 'Cucumber', 'producePic': 'images/cucumber_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 13},
  {'produce': 'Grapes', 'producePic': 'images/grapes_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 14},
  {'produce': 'Asparagus', 'producePic': 'images/asparagus_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 15},
  {'produce': 'Spinach', 'producePic': 'images/spinach_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 16},
  {'produce': 'Strawberries', 'producePic': 'images/strawberries_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 17},
  {'produce': 'Pineapples', 'producePic': 'images/pineapples_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 18},
  {'produce': 'Watermelons', 'producePic': 'images/watermelon_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 19},
  {'produce': 'Eggplants', 'producePic': 'images/eggplant_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 20},
  {'produce': 'Cabbage', 'producePic': 'images/cabbage_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 21},
  {'produce': 'Lettuce', 'producePic': 'images/lettuce_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 22},
  {'produce': 'Honeydew', 'producePic': 'images/honeydew_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 23},
  {'produce': 'Cantaloupe', 'producePic': 'images/cantaloupe_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 24},
  {'produce': 'Mango', 'producePic': 'images/mango_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 25},
  {'produce': 'Guava', 'producePic': 'images/guava_coupons.jpg', 'barcode': 'images/barcode.png','expiration': 'January 1st, 2019', 'index': 26}
]

$(document).ready(function(){

  var finalValue = localStorage.getItem("myPoints");
  document.getElementById("myPoints").innerHTML = finalValue;

$(function(){
//  $(".favoriteBtn").on("click", function(){
    console.log("Restoring array data from local storage");
    myFavorites = JSON.parse(localStorage.getItem("favCoup"));
    var source2 = $('#favoritesTemplate').html();

    var template2 = Handlebars.compile(source2);

    var parentDiv2 = $("#placeholder");

    var html2 = template2(simpleData);
    console.log(html2);
    //parentDiv2.append(html2);
//    var output = "<ul>";
    if (myFavorites != null) {
      for(var x = 0; x < simpleData.length; x++){
        for(var y = 0; y< myFavorites.length; y++){
          if(simpleData[x].produce == myFavorites[j]) {
            var currData3 = simpleData[i];
            var currHtml3 = template2(currData3);
            parentDiv2.append(currHtml3);
          }
        }
      }

      for (var i = 0; i < complexData.length; i++){
        for (var j = 0; j < myFavorites.length; j++){
          if(complexData[i].produce == myFavorites[j]) {
            var currData2 = complexData[i];
            var currHtml2 = template2(currData2);
            parentDiv2.append(currHtml2);
          }
        }
      }
    }
//    output += "</ul>";

  //  document.getElementById("placeholder").innerHTML = output;
  //});
});

});
