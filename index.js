'use strict';

const WIKIPEDIA_SEARCH_URL = 'https://en.wikipedia.org/w/api.php';

function getDataFromApi(searchTerm, callback) {
  const settings = {
$.ajax( {
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: callback(data) {
       // do something with data
    }
} );
$.ajax(settings);
}

function handleRecipeButton(){
  $('.js-recipe-button').click(function(event){
//when user clicks button, country appears along with flag, map, and recipe (and hopefully photo). Text on button changes to "Try another coutnry" and will generate new country etc if clicked again
  });
}

function handleSubmitButton() {
  $('.submit').click(function (event){
//when user submits zipcode, returns restaurants nearby that serve food from country currently selected in .country-text
  });
}
