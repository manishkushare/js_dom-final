let ulCards = document.querySelector(".cards-info");
// ulCards.classList = "container"
let cards = document.querySelector(".cards")
let ulList = document.querySelector(".nav-list");
let activeHouse = "Starks";
let peoples = got.houses.map((house) => house.name);
console.log(peoples);

function createNav() {
    ulList.innerText = "";
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("button-active"));

    peoples.forEach (name => {

        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerText= name;
        if (name === activeHouse) {
            button.classList.add("button-active");
            console.log("some");
        }

        button.addEventListener('click',() => {
            activeHouse = event.target.innerText;
            createCards();
        });
        console.log(button);
        li.append(button);
        ulList.append(li);
    })
}
createNav();


function createCards(event) {
    createNav();

    // activeHouse = event.target.innerText;
    ulCards.innerHTML = "";    
    let person = got.houses.find(person => person.name == activeHouse).people;
    person.forEach(person => {
        let li = document.createElement("li");
        // li.className = liList;
        let personName = person.name;
        console.log(person);
        let personImage = person.image;
        let personDescription =  person.description;
        let h2= document.createElement("h2");
        h2.innerText= personName;
        let p = document.createElement("p");
        p.innerText= personDescription;
        let img = document.createElement("img");
        console.log(img);
        let div = document.createElement("div");
        div.className = "grid";
        div.append(h2,img)
        li.append(div,p);
        img.outerHTML = `<img src="${personImage}" alt="${personName}">`;
        ulCards.append(li);
        cards.append(ulCards);
    })
}
createCards();