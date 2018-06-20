'use strict';

let currentCuisine = '';

//function will randomly select one of the cuisines in the array. These cuisines are all the "supported cuisines" for the allowedCuisine parameter
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

//when clicked, resultCuisine to display in the div, text on button to change to "Try another cuisine"
function setupRecipeButton(){
  console.log('setting up the click handler')
  $('.js-recipe-button').click(function(event){
    selectRandomCuisine()
    $('.cuisine-text').html(`<div>${currentCuisine}!</div>`)
    $('.js-recipe-button').text("Try another cuisine!");
  });
}

//retrieves data from API, including pics and matching the current randomly selected cuisine
function getDataFromYummlyApi() {
  console.log("setting up the button to get data");
  $('.js-recipe-button').click(function(event){
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

function renderResults(matches){
  let bigString = renderSingleRecipe(matches[Math.floor(Math.random() * matches.length)]);
  $(".recipe-text").html(bigString);
}

function renderSingleRecipe(recipe) {
  return (`
  <div class = "renderedRecipe">
    <h2>${recipe.recipeName}</h2>
    <img src="${recipe.smallImageUrls[0]}" class= "recipeImage" role= "image" alt= "Recipe photo">
    <a href="https://www.yummly.com/recipe/${recipe.id}" target="new">Click here for recipe</a>
  </div>`)
}

$('.userZipcode').submit((event) =>{
  event.preventDefault()
  let targetzip = $('.zip-input').val()
  let targetURL = `https://www.yelp.com/search?find_desc=${currentCuisine}&find_loc=${targetzip}`
  window.open(targetURL, '_blank');
})

$(function(){
setupRecipeButton();
getDataFromYummlyApi();
//displayYummlySearchData();
});
