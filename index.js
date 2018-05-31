'use strict';

const = YUMMLY_SEARCH_URL='';

const = YELP_SEARCG_URL='';

//function will randomly select one of the cuisines in the array
function selectRandomCuisine(){
  const cuisines = [
  "American", "Italian", "Asian", "Mexican", "Southern & Soul Food", "French", "Southwestern", "Barbecue", "Indian", "Chinese", "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish", "German", "Thai", "Moroccan", "Irish", "Japanese", "Cuban", "Hawaiin", "Swedish", "Hungarian", "Portugese"];
  let randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  console.log(randomCuisine);
}:
}
selectRandomCuisine();

function selectRandomRecipe(){
  //this will use the same method in selectRandomCuisine to select a random recipe from Yummly in the matching category
}

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
    };
$.ajax(settings);
}

function handleRecipeButton(){
  $('.js-recipe-button').click(function(event){

//when user clicks button, cuisine appears along with recipe (and hopefully photo). Text on button changes to "Try another cuisine" and will start the process all over
  });
}

function handleSubmitButton() {
  $('.submit').click(function (event){
//when user submits zipcode, returns restaurants nearby that serve food from current cuisine in app
  });
}
