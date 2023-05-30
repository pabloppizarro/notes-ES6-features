// NEW FEATURES ES6!!!

//STRING SERIALIZARION ``
var box;
var boxes = document.getElementById("boxes");
//Nuevo primitivo  ES6 Symbol
const id = Symbol("1");
const id2 = Symbol(1);
// console.log(id.description === id2.description);

for (let i = 0; i < 5; i++) {
    box = document.createElement("div");
    box.onclick = function () {
        alert(`Iam a box number:  ${i}
            id: ${(id.description = Math.random())}
        `);
    };
    boxes.appendChild(box);
}
// new  Map  -> no se accede como un objeto!

const course = new Map();
course.set("Angular", { mentor: "Sanders", totalTimeInHours: 43 });
course.set("TDD", { mentor: "JR Kalk", totalTimeInHours: 23 });

// // console.log(course);
// console.log(course.get("Angular"));

const details = new Map([
    { [Date.now]: "Date today" },
    { 43: "Some id" },
    { $: "Date today" },
]);

// console.log(details);
// console.log(details.size);

//SET  son unique, si intentamos agregar uno igual, solo respeta una instancia
const authors = new Set();
authors.add("Isaac Asimov").add("Jordan Peterson");
// console.log(authors);
authors.add("Isaac Asimov");
// console.log(authors);
authors.has("any");

//SPREAD OPERATOR

let cats = ["Kalu", "Shiva"];
let dogs = ["Pug", "Nose"];

let animals = ["Monkey", ...cats, ...dogs];
// console.log(animals);

//DESTRUCTURACION
let cities = ["Mendoza", "Bs As", "Carlos Paz"];
let [mza, , carlosPaz] = cities;

// console.log(mza, carlosPaz);

//Object Literal Enhanced
// cuando la variable del objeto se llama igual al argumento valor por lo tanto se pone una sola vez

function yell(name, sound) {
    return {
        name, //aqui y abajo
        sound,
        yellTwo: function () {
            console.log(
                `${name} says: ${sound.toUpperCase()}! ${sound.toUpperCase()}!`
            );
        },
    };
}

// yell("pablo", "ayiyiii").yellTwo();

//object spread operator
let launch = {
    food: "pizza",
    drink: "cola",
};

let dessert = {
    sweet: "flan",
};
const todaysMenu = { ...launch, ...dessert };

// console.log(todaysMenu);

// object destructuring

const samurai = {
    name: "Shisui",
    power: "insane",
    hakiColor: "violet black",
    lastUser: "Zoro",
};
const { name, power } = {
    name: "Shisui",
    power: "insane",
    hakiColor: "violet black",
    lastUser: "Zoro",
};

// console.log(name, power);
function showUserHaki({ lastUser, hakiColor }) {
    return `${lastUser} had learned how to transfer ${hakiColor} haki to his sword`;
}
// console.log(showUserHaki(samurai));

//CLASSES AND OBJCTES

class Animal {
    _skinColor;
    constructor(name, color) {
        this._skinColor = color;
        console.log(`the Animal ${name} has ${color} color`);
    }

    get givemeYourSkinColor() {
        return this._skinColor;
    }
    set changeSkinColor(new_color) {
        this._skinColor = new_color;
    }
}
var hipo = new Animal("robert", "violet");
hipo.changeSkinColor = "red";
// console.log(`my new sking color is : ${hipo.givemeYourSkinColor}`);

class Dog extends Animal {
    constructor() {
        super("snoop", "brown");
    }
}
// var doggy = new Dog();

// arrow function, scope and this

let person = {
    first: "Pablo",
    hobbies: ["crossfit", "videogames", "music"],
    printHobbies: function () {
        this.hobbies.forEach(function (hobby) {
            console.log(`${this.first} likes to ${hobby}`);
        });
    },
    printHobbiesArrowFunc: function () {
        this.hobbies.forEach((hobby) => {
            console.log(`Arrow -> ${this.first} likes to ${hobby}`);
        });
    },
};

// person.printHobbies();
// person.printHobbiesArrowFunc();

//generators

function* count() {
    yield 1;
    yield 2;
    yield 3;
    yield `sdasd`;
}
let timer = count();
console.log(timer.next());
console.log(timer.next().value);
console.log(timer.next().done);
console.log(timer.next());
console.log(timer.next());

//PROMISES

const delay = (secs) => new Promise((res, rej) => setTimeout(res, secs * 1000));

delay(2).then((res) => console.log(`resolved after 2 secs`));

//ASYNC Y AWAIT NO SON DE TS, SON DE ES6
