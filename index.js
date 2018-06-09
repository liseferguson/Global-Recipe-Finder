'use strict';

let currentCuisine = '';

const YUMMLY_SEARCH_URL = 'https://api.yummly.com/v1';

//function will randomly select one of the cuisines in the array. These cuisines are all the "supported cuisines" for the allowedCuisine parameter
function selectRandomCuisine() {
  const cuisines = [
    "american", "italian", "asian", "mexican", "southern & soul food",
    "french", "southwestern", "barbecue", "indian", "chinese",
    "cajun & creole", "english", "mediterranean", "greek", "spanish",
    "german", "thai", "moroccan", "irish", "japanese",
    "cuban", "hawaiin", "swedish", "hungarian", "portugese"
  ];
  let randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  currentCuisine = randomCuisine;
  return randomCuisine;

}

//when clicked, resultCuisine to display in the div, text on button to change to "Try another cuisine"
function setupRecipeButton(){
  console.log('setting up the click handler')
  $('.js-recipe-button').click(function(event){
    selectRandomCuisine()
    $('.cuisine-text').html(`<div>${currentCuisine}</div>`)
    $('.js-recipe-button').text("Try another cuisine!");
  });
}

//retrieves data from API, including pics and matching the current randomly selected cuisine
function getDataFromYummlyApi(searchTerm, callback) {
  console.log("setting up the button to get data");
  $('.js-recipe-button').click(function(event){
  const yumSettings = {
      url: `https://api.yummly.com/v1/api/recipes?_app_id=8dc09775&_app_key=e1e1a4f3182110165850285dd6044a66&requirePictures=true&allowedCuisine[]=cuisine^cuisine-${currentCuisine}`,
      dataType: 'json',
      type: 'GET',
      headers: {},
      success: function (yumData) {
       console.log(yumData);
      },
      error: function(error){
        console.log('oh god oh god oh god oh god');
        console.log(error);
      }
  };
  console.log('now I have sent the request')
  $.ajax(yumSettings);
//  $('.restaurant-form').css('display', 'block');
})
}

// renders 1 recipe and photo to the browser. imageUrlsBySize is the name of the photos
function renderResults(matches){
  return `
  <div class = "renderedRecipe">
    <h2>${matches.recipeName}</h2>
    <img src="https://api.yummly.com/v1/api/recipes?_app_id=8dc09775&_app_key=e1e1a4f3182110165850285dd6044a66&requirePictures=true&allowedCuisine[]=cuisine^cuisine-${currentCuisine}${matches.smallImageUrls}" role= "image" alt= "Recipe photo">
    <h3>${matches.ingredients}</h3>
  </div>
    `
}

//this function makes recipe and photo appear on page in <div class="js-current-recipe">
function displayYummlySearchData(yumData) {
  const results = yumData.matches.map((matches, recipeName) => renderResults(recipeName));
  $('.js-current-recipe').html(results);
}

$(function(){
setupRecipeButton();
getDataFromYummlyApi();
renderResults();
displayYummlySearchData();
});
