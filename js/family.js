// FAMILY page js

getData();

function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const subcat_id = urlParams.get("cat_id");
    console.log(subcat_id);

    // Routing - either make sub categories or the article connected to one

    if (subcat_id) {
        fetch("http://ssays.dk/kea/houses/wp-json/wp/v2/situation?per_page=30&categories=" + subcat_id + "&?orderBy=id&order=asc")
            .then(res => res.json())
            .then(gotemByid);
    }

    fetch("http://ssays.dk/kea/houses/wp-json/wp/v2/categories?parent=2")
        .then(response => response.json())
        .then(function (data) {
            dataReceived(data)
        })
}

function gotemByid(situations) {
    situations.forEach(showArticle);
}

function showArticle(oneSit) {
    console.log("show data");
    console.log(oneSit);
    // find the template
    const template = document.querySelector(".situation_template").content;
    // Clone the template
    const sitCopy = template.cloneNode(true);
    // Fill out the template
    sitCopy.querySelector(".situation h2").textContent = oneSit.title.rendered;
    if (oneSit.order > 1) {
        sitCopy.querySelector(".situation h2").classList.add("not_first_header");
    }
    if (oneSit.sub_header) {
        const element = document.createElement("h5");
        element.textContent = oneSit.sub_header;
        sitCopy.querySelector(".situation").appendChild(element);
    }
    if (oneSit.paragraph_1) {
        const parag = document.createElement("p");
        parag.textContent = oneSit.paragraph_1;
        parag.classList.add("p1");
        sitCopy.querySelector(".situation").appendChild(parag);
    }
    if (oneSit.paragraph_2) {
        const parag = document.createElement("p");
        parag.textContent = oneSit.paragraph_2;
        parag.classList.add("p2");
        sitCopy.querySelector(".situation").appendChild(parag);
    }
    if (oneSit.paragraph_3) {
        const parag = document.createElement("p");
        parag.textContent = oneSit.paragraph_3;
        parag.classList.add("p3");
        sitCopy.querySelector(".situation").appendChild(parag);
    }
    if (oneSit.paragraph_4) {
        const parag = document.createElement("p");
        parag.textContent = oneSit.paragraph_4;
        parag.classList.add("p4");
        sitCopy.querySelector(".situation").appendChild(parag);
    }
    if (oneSit.button_text) {
        const butt = document.createElement("div");
        butt.textContent = oneSit.button_text;
        butt.classList.add("button");
        sitCopy.querySelector(".situation").appendChild(butt);
    }
    // Give the boxes the right color
    // subCopy.querySelector(".sub_category").setAttribute("style", "background-color: #407F6A;")
    // Set the goddamn link

    // Append the template
    const parentElement = document.querySelector("#article");
    parentElement.appendChild(sitCopy);

}

function dataReceived(cats) {
    //console.log(cats);
    cats.forEach(createSubbuttons);
}

function createSubbuttons(oneCat) {
    //console.log(oneCat);
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
