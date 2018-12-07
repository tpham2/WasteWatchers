$(document).ready(function(){

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
          }
          else {
            newTitle.style.display = "none";
          }
        }

  // Search function

     var searchInput = document.getElementById("search");

     $("#search").keyup(function(event) {
    //  searchInput.addEventListener("keydown", function (e) {
          if (event.keyCode === 13) {  //checks whether the pressed key is "Enter"
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
