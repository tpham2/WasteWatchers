$(document).ready(function(){
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
