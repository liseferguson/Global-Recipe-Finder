'use strict';

let currentCuisine = '';

let userLocation = '';

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
//change click handler to handle click handlers, then call get data from apis inside
function getDataFromYummlyApi() {
  console.log("setting up the button to get data");
  $('.js-recipe-button').click(function(event){
  getDataFromFourSquareApi();
  const yumSettings = {
      url: `https://api.yummly.com/v1/api/recipes?_app_id=8dc09775&_app_key=e1e1a4f3182110165850285dd6044a66&requirePictures=true&allowedCuisine[]=cuisine^cuisine-${currentCuisine}`,
      dataType: 'json',
      type: 'GET',
      headers: {},
      success: function (yumData) {
        renderResults(yumData.matches);
       console.log(yumData.matches[0]);
      },
      error: function(error){
        console.log('oh god oh god oh god oh god');
        console.log(error);
      }
  };
  //console.log('now I have sent the request')
  $.ajax(yumSettings);
$('.restaurant-form').css('display', 'block');
})
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        userLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    userLocation.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function getDataFromFourSquareApi() {
  console.log("setting up the button to get data");
  const fourSquareSettings = {
    data: {
    client_id: 'CTZMWEX0B0B0G4CORJDSKDOC2N2K0HNFLWC1AXMUQ4CBJZ2S',
    client_secret: 'RDP3OYDZ0TPNATBZY2XA3TUHV3LZFX23OQ4PI3LEHLVQ5E1J',
    ll: '45.5481005, -122.5849967',
    query: currentCuisine,
    v: '20180323',
    limit: 1
  },
      url: `https://api.foursquare.com/v2/venues/explore`,
      dataType: 'json',
      type: 'GET',
      success: function (fourSquareData) {
       console.log(fourSquareData);
      },
      error: function(error){
        console.log('oh god oh god oh god oh god');
        console.log(error);
      }
  };
  //console.log('now I have sent the request')
  $.ajax(fourSquareSettings);
//  $('.restaurant-form').css('display', 'block');

}

function renderResults(matches){
  let bigString = renderSingleRecipe(matches[Math.floor(Math.random() * matches.length)]);
  $(".js-current-recipe").html(bigString);
}

function renderSingleRecipe(recipe) {
  console.log(recipe.smallImageUrls[0]);
  return (`
  <div class = "renderedRecipe">
    <h2>${recipe.recipeName}</h2>
    <a href="https://www.yummly.com/recipe/${recipe.id}" target="new">Click here for recipe</a>
    <img src="${recipe.smallImageUrls[0]}" role= "image" alt= "Recipe photo">
  </div>`)

}

$(function(){
setupRecipeButton();
getDataFromYummlyApi();
//displayYummlySearchData();
});
