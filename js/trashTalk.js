
$(document).ready(function(){

  //login credentials
    localStorage.setItem('username', 'cogs120');
    localStorage.setItem('password', '1234');


    $("#userPW").keyup(function(event) {
    if (event.keyCode === 13) {
        $('.signInButton').click();
    }
    });

    $('.signInButton').click(check);
    function check() {
      var storedName = localStorage.getItem('username');
      var storedPW = localStorage.getItem('password');

      var inputName = document.getElementById('userInput');
      var inputPW = document.getElementById('userPW');

      if(inputName.value == storedName && inputPW.value == storedPW) {
        console.log('Login successful!');
        open("compost2.html", "_self")
        return
      }
      console.log("Incorrect username or password");
      }

//search bar
      $("#wrap").click(extendSearch);
      var newTitle = document.getElementById('newTitle');
      function extendSearch() {
        if (newTitle.style.display === "none") {
          newTitle.style.display = "block";
          document.getElementById('search').blur();
        } else {
          newTitle.style.display = "none";
   }
   //newTitle.style.display = "none";
      }


      //Compost
      var food = ["Apple Core", "Avocado Pit", "Banana Peel",
      "Broccoli Stalk", "Cheese",
       "Chopsticks", "Egg Shell",
       "Potato Peel", "Strawberry Top"];


       $( "#tags" ).autocomplete({
              minLength: 2,
              source: food,
            });


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
               console.log('Unknown Item');

           }
           if (itemFound == true) {
            break;
          }
         }
  totalValue=totalValue + pointValue;
  console.log("Total Value is " + totalValue);
  localStorage.setItem("myPoints", totalValue);
  var finalValue = localStorage.getItem("myPoints");
  document.getElementById("myPoints").innerHTML = finalValue;

    compostInput.value = '';
       }

  var finalValue = localStorage.getItem("myPoints");
  document.getElementById("myPoints").innerHTML = finalValue;




// Search function

   var searchInput = document.getElementById("search");

    searchInput.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        console.log('hello');
  $("#search_submit").click();
        }
    });

    $('#search_submit').click(searchCheck);

      function searchCheck() {
        var itemFound = false;

         switch (searchInput.value) {
           case ("apple"):
             console.log(searchInput.value);
             itemFound = true;
             open("appleSearchResult.html", "_self")
             break;
           case ("banana"):
             console.log(searchInput.value);
             itemFound = true;
             open("bananaSearchResult.html", "_self")
             break;
           default:
             console.log('No Items Found');
         }
         searchInput.value = '';
       }


});
