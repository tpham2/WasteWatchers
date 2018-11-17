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

var food = [
  {"category": "fruitItems", "label": "Apple Core", "points": 5},
    {"category": "fruitItems", "label": "Avocado Pit", "points": 3}
]

$(document).ready(function(){

  var source = $('#first-template').html();

  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedStuff");

  var html = template(simpleData);
  console.log(html);
  parentDiv.append(html);

  for(var i = 0; i < complexData.length; i++){
    var currData = complexData[i];
    var currHtml = template(currData);
    parentDiv.append(currHtml);
  }

  // Get the modal
function createOpenModel(i) {
  return function() {
      var modal2 =  document.getElementById('myModal' + i);
      modal2.style.display = "block";
      modal = modal2;
  }
}
var functions = [];

for (var i = 0; i < complexData.length+1; i++) {
  functions[i] = createOpenModel(i);
}
var modal = document.getElementById('myModal');
// When the user clicks the button, open the modal
for(var i = 0; i < complexData.length+1; i++){
  var modalString = '#myModal' + i;
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
function favoring(){
  $(this).find('img').toggle();
}

//login credentials
localStorage.setItem('username','cogs120');
localStorage.setItem('password','1234');

$('.signInButton').click(check);
function check() {
  var storedName = localStorage.getItem('username');
  var storedPW = localStorage.getItem('password');

  var inputName = document.getElementById('userInput');
  var inputPW = document.getElementById('userPW');

  if(inputName.value == storedName && inputPW.value == storedPW){
    console.log('Login successful!');
    open("home_page.html", "_self")
    return
  }
  console.log("Incorrect username or password");
}

/*compost*/
$.widget("ui.autocomplete", $.ui.autocomplete,{
options: {
  messages: {
    noResults: "",
    results: function(amount){
      return 1
    }
  }
},
_return: function(content){
  this._close();
}


});

$('#helpModal').modal('show');

var food = ["Apple Core", "Avocado Pit", "Banana Peel","Broccoli Stalk", "Cheese",
"Chopsticks", "Egg Shell", "Potato Peel", "Strawberry Top"];

localStorage.setItem("foodItems",JSON.stringify(food));
var foodItems = JSON.parse(localStorage.getItem('foodItems'));

var compostInput = document.getElementById('tags');
var compostNumber = document.getElementById('compostNumber');
var pointValue = 0;
var totalValue = 0;


$('#submit').click(compostCheck);
function compostCheck() {
var itemFound = false;
for (i=0; i<foodItems.length; i++) {
switch (compostInput.value) {
case foodItems[0]:
console.log(foodItems[0]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
console.log(pointValue);
itemFound = true;
break;
case foodItems[1]:
console.log(foodItems[1]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[2]:
console.log(foodItems[2]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[3]:
console.log(foodItems[3]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[4]:
console.log(foodItems[4]);
pointValue=8;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[5]:
console.log(foodItems[5]);
pointValue=10;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[6]:
console.log(foodItems[6]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[7]:
console.log(foodItems[7]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
case foodItems[8]:
console.log(foodItems[8]);
pointValue=5;
pointValue = pointValue * compostNumber.value;
itemFound = true;
console.log(pointValue);
break;
default:
console.log('unknown Item');
}

if (itemFound == true) {
break;
}
}
totalValue=totalValue + pointValue;
console.log("Total Value is" + totalValue);
localStorage.setItem("myPoints", totalValue);
document.getElementById("myPoints").innerHTML = totalValue;
compostInput.value = '';
}
/*
"Coffee Filter", "Fish Skin", "Flour", "Jell-O", "Oatmeal", "Olive Pit",
"Rice", "Seeds", "Soup",
*/
$( "#tags" ).autocomplete({
   minLength: 2,
   source: food,
    });

});
