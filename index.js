'use strict';

let currentCuisine = '';

const YUMMLY_SEARCH_URL = 'https://api.yummly.com/v1';

//function will randomly select one of the cuisines in the array
function selectRandomCuisine() {
  const cuisines = [
    "American", "Italian", "Asian", "Mexican", "Southern & Soul Food",
    "French", "Southwestern", "Barbecue", "Indian", "Chinese",
    "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish",
    "German", "Thai", "Moroccan", "Irish", "Japanese",
    "Cuban", "Hawaiin", "Swedish", "Hungarian", "Portugese"
  ];

  let randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  currentCuisine = randomCuisine;
  return randomCuisine;

}



// let resultCuisine = selectRandomCuisine();
// console.log(resultCuisine);

//when clicked, resultCuisine to display in the div, text on button to change to "Try another cuisine"
function setupRecipeButton(){
  console.log('setting up the click handler')
  $('.js-recipe-button').click(function(event){
    $('.cuisine-text').html(`<div>${selectRandomCuisine()}</div>`)
    $('.js-recipe-button').text("Try another cuisine!");
  });
}


function selectRandomRecipe(){
  const recipesFromData = [];
  //this will use the same method in selectRandomCuisine to select a random recipe from Yummly (to be stored in the recipesFromData const) in the matching category
}



//get data from Yummly API

function getDataFromApi(searchTerm, callback) {
  const settings = {
      url: `http://api.yummly.com/v1/api/recipes?_app_id=8dc09775&_app_key=e1e1a4f3182110165850285dd6044a66&requirePictures=true&q=${currentCuisine}`,
      dataType: 'json',
      type: 'GET',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function (data) {
       console.log(data);
    }
$.ajax(settings);
}

/*
function handleSubmitButton() {
  $('.submit').click(function (event){
//when user submits zipcode, returns restaurants nearby that serve food from current cuisine in app
  });
}
*/

$(function(){
setupRecipeButton();
getDataFromApi();
});
