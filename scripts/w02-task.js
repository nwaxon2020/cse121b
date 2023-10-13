/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Nwachukwu Ogbonnaya Prince";

let currentYear = new Date().getFullYear();

let profilePicture = "images/mypicture_javaScript.png"


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

//Assigning the nameElement's innerHTML property to the fullName variable value.
nameElement.innerHTML = `<strong>${fullName}</strong>`; //Surrounding the fullName value with <strong> tags.

//textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

//Attribute method to set the "src" property
imageElement.setAttribute("src", profilePicture);

//Attribute method to set the "alt" property
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

//Declaring an array variable to hold my favorite foods.
const favouriteFood = ["Beans", " jelof Rice", " Totie", " Egusi-soup"," Pounded Yam"];

//Modifying the HTML element with the id of food
foodElement.innerHTML = favouriteFood;

//Declaring and instantiating a variable for new food item
const newFood = " Bread Toast";

//Adding the new variable to my favorite food array.
favouriteFood.push(newFood);

//Appending the new array value content to the HTML element 
foodElement.innerHTML += `<br>${favouriteFood}`;

//Remove the first element in the favorite food array
favouriteFood.shift();

foodElement.innerHTML += `<br>${favouriteFood}`;

//Remove the last element in the favorite food array.
favouriteFood.pop();

foodElement.innerHTML += `<br>${favouriteFood}`;








// To display "favouritefood" Arrey in a looped formart
/* for(let i = 0; i < favouriteFood.length; i++){

     const liElement = document.createElement("li");
     liElement.textContent = favouriteFood[i];
     foodElement.append(liElement); 
     console.log(foodElement);
}*/