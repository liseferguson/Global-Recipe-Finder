'use strict';

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
  return randomCuisine;
}

//when clicked, resultCuisine to display in the div, text on button to change to "Try another cuisine"
function setupRecipeButton(){
  console.log('setting up the click handler')
  $('.js-recipe-button').click(function(event){
    $('.cuisine-text').html(`<div>${selectRandomCuisine()}</div>`)
  });
}


function selectRandomRecipe(){
  const recipesFromData = [];
  //this will use the same method in selectRandomCuisine to select a random recipe from Yummly (to be stored in the recipesFromData const) in the matching category
}


/*
//have to change this for Yummly not Wikipedia
function getDataFromApi(searchTerm, callback) {
  const settings = {
      url: "https://en.wikipedia.org/wiki/National_dish#By_country&callback=?",
      data: queryData,
      dataType: 'json',
      type: 'GET',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function (data) {
       console.log(data);
    }
$.ajax(settings);
}

function handleSubmitButton() {
  $('.submit').click(function (event){
//when user submits zipcode, returns restaurants nearby that serve food from current cuisine in app
  });
}
*/

setupRecipeButton()
