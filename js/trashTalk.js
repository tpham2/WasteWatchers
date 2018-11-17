var food = [
  {"category": "fruitItems", "label": "Apple Core", "points": 5},
    {"category": "fruitItems", "label": "Avocado Pit", "points": 3}
]

$(document).ready(function(){

  //login credentials
    localStorage.setItem('username', 'cogs120');
    localStorage.setItem('password', '1234');


    $('.signInButton').click(check);
    function check() {
      var storedName = localStorage.getItem('username');
      var storedPW = localStorage.getItem('password');

      var inputName = document.getElementById('userInput');
      var inputPW = document.getElementById('userPW');

      if(inputName.value == storedName && inputPW.value == storedPW) {
        console.log('Login successful!');
        open("home_page.html", "_self")
        return
      }
      console.log("Incorrect username or password");
      }

      $('#helpModal').modal('show');

      var food = ["Apple Core", "Avocado Pit", "Banana Peel",
      "Broccoli Stalk", "Cheese",
       "Chopsticks", "Egg Shell",
       "Potato Peel", "Strawberry Top"];

       /*compost*/
           $.widget("ui.autocomplete", $.ui.autocomplete, {
             options: {
               messages: {
                 noResults: "",
                 results: function(amount){
                   return 1 }
               }
             },
             __return: function(content){
               this._close();
             }


           });

       $( "#tags" ).autocomplete({
              minLength: 2,
              source: food,
            });
       /*
       "Coffee Filter", "Fish Skin", "Flour", "Jell-O", "Oatmeal", "Olive Pit",
       "Rice", "Seeds", "Soup",
       */

       localStorage.setItem("foodItems", JSON.stringify(food));
       var foodItems = JSON.parse(localStorage.getItem('foodItems'));

       var compostInput = document.getElementById("tags");
       var compostNumber = document.getElementById("compostNumber");
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
  console.log("Total Value is " + totalValue);
  localStorage.setItem("myPoints", totalValue);
  document.getElementById("myPoints").innerHTML = totalValue;

    compostInput.value = '';
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

});
