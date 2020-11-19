// FAMILY page js

getData();

function getData() {

    /*const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const */

    fetch("http://ssays.dk/kea/houses/wp-json/wp/v2/categories?parent=2")
        .then(response => response.json())
        .then(function (data) {
            dataReceived(data)
        })
}

function dataReceived(cats) {
    console.log(cats);
    cats.forEach(createSubbuttons);
}

function createSubbuttons(oneCat) {
    console.log(oneCat);
    // find the template
    const template = document.querySelector(".subTemplate").content;
    // Clone the template
    const subCopy = template.cloneNode(true);
    // Fill out the template
    subCopy.querySelector(".sub_category h3").textContent = oneCat.name;
    // Give the boxes the right color
    subCopy.querySelector(".sub_category").setAttribute("style", "background-color: #407F6A;")
    // Set the goddamn link
    const a = subCopy.querySelector("a");
    if (a) {
    a.href += oneCat.id;
    }
    // Append the template
    const parentElement = document.querySelector("#sub_categories");
    parentElement.appendChild(subCopy);


}

/*
function showHouse(oneHouse) {
    console.log(oneHouse);
    // Find the template
    const template = document.querySelector("#houseTemplate").content;
    // clone the template
    const myCopy = template.cloneNode(true);

    // Fill out the template:
    myCopy.querySelector(".house_image").setAttribute("src", oneHouse.image.guid);

    // "http://ssays.dk/kea/common_interest_images/" + city.gsx$heroimage.$t + ".jpg"

    myCopy.querySelector(".adress").textContent = oneHouse.title.rendered;
    myCopy.querySelector(".city").textContent = oneHouse.city;
    myCopy.querySelector(".beds").textContent = oneHouse.beds;
    myCopy.querySelector(".baths").textContent = oneHouse.baths;
    myCopy.querySelector(".sq_feet").textContent = oneHouse.square_feet;

    // Append the template
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myCopy);

}

*/
