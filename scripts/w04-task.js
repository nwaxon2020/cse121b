/* LESSON 3 - Programming Tasks */

/* Profile Object  */


const myProfie = {
    name: "Prince Ogbonnaya Nwachukwu",
    photo: "images/mypicture_javaScript.png",
    favouriteFoods: ["Rice", "Beans", "porage", "Semo & Egussi", "Bread and Peanut-Butter"],
    hobbies: ["Coding", "Playing Games", "Watching Football"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfie.placesLived.push({
    place: "Sagamu, Ogun State, Nigeria.",
    length: "8 years."},
{
    place: "Wuse, Auja Nigeria.",
    length: "12 years."
},
{
    place: "Cape Coast Region, Ghana.",
    length: "2 years."
}
);

/* DOM Manipulation - Output */


/* Name */
document.getElementById("name").textContent = myProfie.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfie.photo);

document.getElementById("photo").setAttribute("alt", `Profile Picture Of ${myProfie.name}`);

/* Favorite Foods List*/

myProfie.favouriteFoods.forEach(food => {

    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
     
});

/* Hobbies List */

myProfie.hobbies.forEach(hobby => {

    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li) 
});

/* Places Lived DataList */

// myProfie.placesLived.forEach(lived => {

myProfie.placesLived.forEach(element => {
    let places = document.createElement("dt");
    places.textContent = element.place;
    document.getElementById("places-lived").appendChild(places);

    let lengths = document.createElement("dd");
    lengths.textContent = element.length;
    document.getElementById("places-lived").appendChild(lengths);
});