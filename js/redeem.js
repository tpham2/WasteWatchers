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

var source = $('#first-template').html();

var template = Handlebars.compile(source);

var parentDiv = $("#templatedStuff");

var html = template(simpleData);
//console.log(html);
parentDiv.append(html);

for(var i = 0; i < complexData.length; i++){
  var currData = complexData[i];
  var currHtml = template(currData);
  parentDiv.append(currHtml);
}

// Get the modal
function createOpenModal(i) {
return function() {
    var modal2 =  document.getElementById('myModal' + i);
    modal2.style.display = "block";
    modal = modal2;
}
}
var functions = [];

for (var i = 0; i < complexData.length+1; i++) {
functions[i] = createOpenModal(i);
}
var modal = document.getElementById('myModal');
// When the user clicks the button, open the modal
for(var i = 0; i < complexData.length+1; i++){
$('#carousel' + i).click(functions[i]);
}
// When the user clicks on <span> (x), close the modal
$('.close').click(closeModal);
function closeModal(event){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

//Favoriting Function

$('.favorite').click(favoring)
function favoring(e){
$(this).find('img').toggle();
}
/*
$('.favorite').click(function(e){
   e.stopPropagation();
});


$('.favorite').toggle(
   function(){
      $(this).find('.addFavorite').css('display','inline');   //show request options
   },function(){
      $(this).find('.removeFavorite').css('display','inline');    //hide all request oprtions menus
   }
);*/
//Adding Favorites to Local Storage
$(function(){
$('.addFavorite').on("click", function(){
  try {
    //$(this).attr('disable', true);

    var addID = $(this).closest("span").attr("id");
    var favoriteOff = $('.addFavorite').attr('disable', true);
    var favoriteOn = $('.removeFavorite').attr('disable', true);

    var myFavorites=JSON.parse(localStorage.getItem("favCoup"));
    var favoriteStatus=JSON.parse(localStorage.getItem("favToggle"));

    if (myFavorites == null) {
      myFavorites = [];
      favoriteStatus.push(favoriteOff);
    }

    if (myFavorites != null) {
      for (var i = 0; i < myFavorites.length; i++) {
        if (addID == myFavorites[i]) {
          if (favoriteOn != favoriteStatus[i])
          favoriteStatus.push(favoriteOn);
          return;
        }
      }
    }
    myFavorites.push(addID);

    localStorage.setItem("favCoup", JSON.stringify(myFavorites));
    localStorage.setItem("favToggle", JSON.stringify(favoriteStatus));

  }

  catch(e) {
    if (e==QUOTA_EXCEEDED_ERR) {
      console.log("Error: Local Storage Limit Exceeded");
    }

    else {
      console.log("Error: Saving to Local Storage");
    }
  }
});
});

$(function(){
$('.removeFavorite').on("click", function(){
    //$(this).attr('disable', true);

    var removeID = $(this).closest("span").attr("id");
    favoriteOff = $('.addFavorite').attr('disable', true);
    favoriteOn = $('.removeFavorite').attr('disable', true);

    myFavorites=JSON.parse(localStorage.getItem("favCoup"));
    favoriteStatus=JSON.parse(localStorage.getItem("favToggle"));

    if (myFavorites != null) {
      for (var i = 0; i < myFavorites.length; i++) {
        if (removeID == myFavorites[i]) {
          if (favoriteOff != favoriteStatus[i])
          alert("This Coupon has been removed");
          favoriteStatus.push(favoriteOff);
          delete myFavorites[i];
          localStorage.setItem("favCoup", JSON.stringify(myFavorites));
          myFavorites[i] = [];
          return;
        }
      }
    }

    if (myFavorites == null) {
      favoriteStatus.push(favoriteOff);
      alert("You have no favorite coupons");

    }

    localStorage.setItem("favToggle", JSON.stringify(favoriteStatus));

});
});

});
