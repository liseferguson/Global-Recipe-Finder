'use strict';

let currentCuisine = '';

//function will randomly select one of the cuisines in the array. These cuisines are all the "supported cuisines" for the allowedCuisine parameter in Yummly.
function selectRandomCuisine() {
  const cuisines = [
    "american", "italian", "asian", "mexican", "southern",
    "french", "southwestern", "barbecue", "indian", "chinese",
    "cajun", "english", "mediterranean", "greek", "spanish",
    "german", "thai", "moroccan", "irish", "japanese",
    "cuban", "hawaiian", "swedish", "hungarian", "portugese"
  ];
  let randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  currentCuisine = randomCuisine;
  return randomCuisine;
}

//let cuisineDisplay = currentCuisine[0].toUpperCase()+currentCuisine.substring(1);

//when clicked, resultCuisine to display in the div, text on button to change to "Try another cuisine"
function setupRecipeButton(){
  $('.js-recipe-button').click(function(event){
    selectRandomCuisine()
    $('.cuisine-text').html(`<div>${currentCuisine}!</div>`)
    $('.js-recipe-button').text("Try another cuisine!");
  });
}

//retrieves data from API, including pictures and matching the current randomly selected cuisine. Also displays previously hidden form for user to search for restaurants.
function getDataFromYummlyApi() {
  $('.js-recipe-button').click(function(event){
    let data = {
      _app_id: '8dc09775',
      _app_key: 'e1e1a4f3182110165850285dd6044a66',
      requirePictures: true,
      'allowedCuisine[]': `cuisine^cuisine-${currentCuisine}`
    };
  const yumSettings = {
      url: `https://api.yummly.com/v1/api/recipes`,
      data: data,
      dataType: 'json',
      type: 'GET',
      headers: {},
      success: function (yumData) {
        renderResults(yumData.matches);
      },
      error: function(error){
        console.log(error);
      }
  };
  $.ajax(yumSettings);
$('.restaurant-form').css('display', 'block');
})
}

//Randomly selects one of the matched recipes, turns recipes from API data matching cuisine type into a string
function renderResults(matches){
  let bigString = renderSingleRecipe(matches[Math.floor(Math.random() * matches.length)]);
  $(".recipe-text").html(bigString);
}

//Displays one random recipe from renderResults and it's photo in the browser along with link to recipe page
function renderSingleRecipe(recipe) {
  var imageUrl = recipe.imageUrlsBySize[90];
  imageUrl = imageUrl.replace("=s90", "=s500");

  return (`
  <div class = "renderedRecipe">
    <h2>${recipe.recipeName}</h2>
    <img src="${imageUrl}" class= "recipeImage" role= "img" alt= "Recipe photo"</a>
    <a href="https://www.yummly.com/recipe/${recipe.id}" target="new" role="link" class = "recipe-link">Click here for recipe</a>
  </div>`)
}

//listener event- when user submits their zipcode, opens up another window in browser to Yelp searches for restaurants serving that cuisine type in their area
$('.userZipcode').submit((event) =>{
  event.preventDefault()
  let targetzip = $('.zip-input').val()
  let targetURL = `https://www.yelp.com/search?find_desc=${currentCuisine}&find_loc=${targetzip}`
  window.open(targetURL, '_blank');
})

$(function(){
setupRecipeButton();
getDataFromYummlyApi();
});
