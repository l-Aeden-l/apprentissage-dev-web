"use strict";
// ---- Noms de variables réutilisées plusieurs fois dans le code
let arr, obj, newArray;

/**
 * ========================================================
 *   LES CONDITIONS (if/else if/eles, ternaires, switch)
 * ========================================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>> LES CONDITIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');
console.log('\r');
console.log('|🠊 Conditions if/else if/eles, ternaires et switch');
console.log("--------------------------------------------------------------");
let amount = 100;
let aboveHundred = "supérieur à 100";
let equalOrUnderHundred = "égale ou inférieur à 100";

/* if (amount >= 102) {
  console.log(aboveHundred);
} else if (amount >= 101) {
  console.log(aboveHundred);
} else {
  console.log(equalOrUnderHundred);
}

switch(amount){
  case amount >= 102:
    console.log(aboveHundred);
    break;
  case amount >= 101:
    console.log(aboveHundred);
    break;
  default:
    console.log(equalOrUnderHundred);
}

switch(amount){
  case amount >= 102:
  case amount >= 101:
    console.log(aboveHundred);
    break;
  default:
  console.log(equalOrUnderHundred);
} */

// Condition ternaire
let result = amount >= 102 ? aboveHundred : amount >= 101 ? aboveHundred : equalOrUnderHundred;
console.log(result);

/**
 * =========================================
 *       REST, SPREAD, DESTRUCTURING
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>> REST, SPREAD, DESTRUCTURING <<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

// ------------ Paramètres du reste (Rest parameters) ------------
console.log('\r');
console.log('|🠊 Paramètres du reste (Rest parameters)');
console.log("--------------------------------------------------------------");
console.log('\r');

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(10, 20, 30));

// ------------ Syntaxe de décomposition (Spread syntax) ------------
console.log('\r');
console.log('|🠊 Syntaxe de décomposition (Spread syntax)');
console.log("--------------------------------------------------------------");
console.log('\r');

const firstPartArr = [1, 2, 3];
arr = [...firstPartArr, 4, 5, 6];
console.log(arr);
const firstPartObj = {firstname: "Frédéric", lastname: "HAUGUEL"};
obj = {...firstPartObj, age: 40, region: "Bretagne"};
console.log(obj);

// ------------ Affectation par décomposition (Destructuring assignment - Également possible par imbrication) ------------
console.log('\r');
console.log('|🠊 Affectation par décomposition (Destructuring assignment - Également possible par imbrication)');
console.log("--------------------------------------------------------------");
console.log('\r');

const [first, second, third] = [12, 20, 49];
console.log(first, second);
const {firstname: prenom, secondname: nom} = {firstname: "Frédéric", secondname: "HAUGUEL", age: 40};
console.log(prenom, nom);

// ------------ Combo décomposition + reste ------------
console.log('\r');
console.log('|🠊 Combo décomposition + reste');
console.log("--------------------------------------------------------------");
console.log('\r');

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [ , , ...arr] = list; 
  return arr;
}
newArray = removeFirstTwo(arr);
console.log(newArray);

/**
 * =========================================
 *                 BOUCLES
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> LES BOUCLES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

// Le type null est une valeur vide, mais pas non-définie
// Contrairement à undefined qui correspond à variable sans affectation de valeur
let profil = {
  name: "Aeden",
  age: 40,
  single: true,
  bank_details: {
    name: "La Banque Postale",
    city: "Paris",
    address: "13 Rue Cujas, 75005 Paris"
  },
  get fullname() {
    return `Votre nom est : ${this.name}`;
  },
  set fullname(value) {
    this.name = value;
  }
};

// Symbol (identifiant unique et non modifiable)
// Il existe également Symbol.for() et Symbol.keyFor() (registre global des symboles)
console.log('\r');
console.log('|🠊 Symbol (identifiant unique et non modifiable)');
console.log("--------------------------------------------------------------");
console.log('\r');
const name = Symbol('clef1');
const age = Symbol('clef2');
let utilisateur = {
    [name] : 'Pierre',
    [age] : 29,
    //[name] : "Bibi"
};
console.log(utilisateur);
console.log(utilisateur[name]);


// Littéraux de gabarit (template strings) + fonction anonyme auto-invoquée
console.log('\r');
console.log('|🠊 Littéraux de gabarit (template strings) + fonction anonyme auto-invoquée');
console.log("--------------------------------------------------------------");
console.log('\r');
(function () {
  console.log(`
  Bonjour, je me nomme ${profil.name}
  et je suis un vieux de ${profil.age} piges :D
  `);
})();

// ----- Définir des règles d'écriture/de configuration -----
console.log('\r');
console.log('|🠊 Définir des règles d’écriture/de configuration');
console.log("--------------------------------------------------------------");
console.log('\r');
Object.defineProperties(profil, {
    name: {
      writable: true,
      configurable: true
    },
    age: {
      enumerable: true
    },
    single: {
      value: true
    },
    fullname: {
      enumerable: false
    }
});
/* delete profil.name;
profil.name = "Frédéric";
console.log(profil.fullname); */

// ------------ Boucle while et do while ------------
console.log('\r');
console.log('|🠊 Boucle while et do while');
console.log("--------------------------------------------------------------");
console.log('\r');
let number_1, number_2;
number_1 = number_2 = Math.floor(Math.random() * 10 + -5);

console.log("Execute l'instruction uniquement si la condition est respectée");
while (number_2 < 0) {
  number_2 += 1;
  console.log(number_2);
}

console.log('\r');

console.log("Execute au moins une fois l'instruction");
console.log("(Ajoutera 1, même si la valeur est égale ou supérieure 0)");
do {
  number_1 += 1;
  console.log(number_1);
}
while (number_1 < 0);

// ------------ Les générateurs ------------
console.log('\r');
console.log('|🠊 Les générateurs');
console.log("--------------------------------------------------------------");
console.log('\r');
function* showPrices(i) { 
  while (i < 3) { 
      yield i++; 
  } 
}
//creating an object for our function showPrices 
const gfg = showPrices(0);  
//return 0 because 0 value is passed to the showPrices yield expression 
console.log(gfg.next());  
// return 1 
console.log(gfg.next());  
//return 2 
console.log(gfg.next());
//return 2 
console.log(gfg.next());  

// ------------ Boucle for ------------
// Object.keys : convertit l'objet en tableau en stockant uniquement les clés
// Object.values : convertit l'objet en tableau en stockant uniquement les valeurs
// Object.entries : convertit l'objet en tableau en stockant les clés et les valeurs
console.log('\r');
console.log('|🠊 Boucle for');
console.log("--------------------------------------------------------------");
console.log('\r');
let profil_data = Object.entries(profil);
console.log(profil_data);
for (let i = 0; i < profil_data.length; i++) {
  const [prop, value] = profil_data[i];
  if (typeof value !== 'object'){
    console.log(`${prop}: ${value}`);
  } else {
    console.log(`${prop}: `);
    const array = Object.entries(value);
    for (let j = 0; j < array.length; j++) {
      const [prop, value] = array[j];
      console.log(`\t ${prop}: ${value}`);
    }
  }
}

// ------------ Boucle for... in ------------
console.log('\r');
console.log('|🠊 Boucle for... in');
console.log("--------------------------------------------------------------");
console.log('\r');

for (const property in profil) {
  if (typeof profil[property] !== 'object') {
    console.log(`Type: ${typeof profil[property]} | ${property}: ${profil[property]}`);
  } else {
    console.log(`Type: ${typeof profil[property]} | ${property}: `);
    const object = profil[property];
    for (const property in object) {
      console.log(`\t Type: ${typeof object[property]} | ${property}: ${object[property]}`);
    }
  }
}

// ------------ Boucle for... of ------------
console.log('\r');
console.log('|🠊 Boucle for... of');
console.log("--------------------------------------------------------------");
console.log('\r');
profil_data = Object.entries(profil);
for (const [prop, value] of profil_data) {
  if (typeof value !== 'object'){
    console.log(`${prop}: ${value}`);
  } else {
    console.log(`${prop}: `);
    const array = Object.entries(value);
    for (const [prop, value] of array) {
      console.log(`\t ${prop}: ${value}`);
    }
  }
}

// ------------ Boucle forEach ------------
console.log('\r');
console.log('|🠊 Boucle forEach');
console.log("--------------------------------------------------------------");
console.log('\r');
Object.entries(profil).forEach(([prop, value]) => {
  if (typeof value !== 'object'){
    console.log(`${prop}: ${value}`);
  } else {
    console.log(`${prop}: `);
    Object.entries(value).forEach(([prop, value]) => {
      console.log(`\t ${prop}: ${value}`);
    });
  }
});

console.log('\r');
console.log('|🠊 Fonction récursive dans boucle for... in');
console.log("--------------------------------------------------------------");
console.log('\r');
const mdObj = {name: "henri", age: 54, address: {city: "Paris", postCode: 75000, job: {compagny: "Carrefour", position: "Vendeur"}}};
let tab = "\t", tabNumber = 0, indent = false, recursive;
(recursive = (object, indent) => {
  (indent) ? tabNumber++ : tabNumber;
  for (const key in object) {
    if (typeof object[key] !== 'object'){
      console.log(`${tab.repeat(tabNumber)} ${key}: ${object[key]}`);
    } else {
      console.log(`${tab.repeat(tabNumber)} ${key}: `);
      recursive(object[key], true);
    }
  }
})(mdObj, indent);

// ------------ Méthode filter ------------
console.log('\r');
console.log('|🠊 Méthode filter (crée un nouveau tableau selon certaines conditions)');
console.log("--------------------------------------------------------------");
console.log('\r');
const variousData = ["Henri", "Jean-pierre", 24, {}, "Céline", 78, true];
const onlyStringArray = variousData.filter((value) => typeof value === "string");
console.log(onlyStringArray);

// ------------ Methode Map ------------
console.log('\r');
console.log('|🠊 Methode Map (crée un nouveau tableau après différentes opérations)');
console.log("--------------------------------------------------------------");
console.log('\r');
const items = Object.getOwnPropertyNames(profil);
  newArray = items.map(key => {
    const value = profil[key];
    return value;
});
console.log(newArray);

// ------------ Set et WeakSets ------------
console.log('\r');
console.log('|🠊 Set');
console.log("--------------------------------------------------------------");
console.log('\r');
// --- Set ---
const uniqueData =  new Set([1,2,3]);
// uniqueData.add(1) N'accepte pas l'ajout/le doublon
console.log(`Contient la valeur 2 ? ${uniqueData.has(2)}`);
console.log(uniqueData);
uniqueData.add(20);
console.log(uniqueData);
uniqueData.delete(3);
console.log(uniqueData);
console.log(`Nombre d'enregistrements : ${uniqueData.size}`);
const iterator = uniqueData.values(); // ou uniqueData.values();
for (let i = 0 ; i < uniqueData.size + 1 ; i++) {
  console.log(iterator.next());
}
for (const data of uniqueData) {
  console.log(data);
}
const keyValueArray = uniqueData.entries();
for (const data of keyValueArray) {
  console.log(data);
}
uniqueData.clear();
console.log(uniqueData);

// --- Weakset (ne peut contenir que des objets et n'est pas "bouclable") ---
console.log('\r');
console.log('|🠊 Weakset');
console.log("--------------------------------------------------------------");
console.log('\r');
const user1 = {name: 'Jean'};
const user2 = {name: 'Émilie'};
const user3 = {name: 'Luc'};
const users = new WeakSet([user1, user2, user3]);
const user4 = {name: "Julie"}
users.add(user4);
console.log(users);
console.log(users.has(user4));
users.delete(user1);
console.log(users);

// ------------ Map et WeakMaps ------------
console.log('\r');
console.log('|🠊 Map et WeakMaps');
console.log("--------------------------------------------------------------");
console.log('\r');

obj = {};
arr = [];
const func = () => {};
const myMap = new Map([[1, "Pomme"], ["deux", "Banane"], [obj, "Cerise"], [arr, "Kiwi"], [func, "Pastèque"]]);
myMap.set(arr, "Poire"); // Met à jour la valeur de la clé "arr" ; la valeur "Kiwi" est remplacée par "Poire"
console.log(myMap);
console.log(myMap.get(obj)); // Retourne la valeur de la clé "obj"

// Les WeakMaps fonctionnent selon le même principe que les WeakSets

/**
 * =========================================
 *               LES FONCTIONS 
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> LES FONCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

// ------------ Fonction classique ------------
console.log('\r');
console.log('|🠊 Fonction classique avec paramètre par défaut');
console.log("--------------------------------------------------------------");
console.log('\r');
const saySomething = function(message = "Bonjour !") {
  console.log(message);
}
saySomething("Comment ça va le monde ?");

/** 
 * Super combo : fonction anonyme fléchée auto-invoquée avec valeur de paramètre par défaut
 * Parce que c'est la fête du slip ! :D
 */
console.log('\r');
console.log('|🠊 Super combo : fonction anonyme fléchée auto-invoquée avec valeur de paramètre par défaut');
console.log("--------------------------------------------------------------");
console.log('\r');
((message = "Bonjour !") => console.log(message))("Comment ça va le monde ?");

console.log('\r');
console.log('|🠊 Les closures');
console.log("--------------------------------------------------------------");
console.log('\r');

// Les fonctions internes à d'autres fonctions se souviennent de leur environnement
// C'est également un bon moyen de rendre des variables privées.
const incrementer = () => {
  let i = 0;
  return () => {
    console.log(i++);
  }
}
const incr_a = incrementer();
incr_a();
incr_a();
incr_a();


/**
 * =========================================
 *                  MIXINS
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> LES MIXINS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
// Kite = Cerf-colant
let kite = {
  name: "My beautiful kite",
  color: "Rainbow"
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(kite);
flyMixin(plane);

// ------------ MIXINS IIFE ------------
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();

/**
 * =========================================
 *         CONSTRUCTEUR ET PROTOTYPE
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>> CONSTRUCTEUR ET PROTOTYPE <<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

function Animal() { }
function Bird() { }
function Dog() { }
Animal.prototype.eyes = 2;
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype, {color: {value: "black"}});
  Bird.prototype.constructor =  Bird;
  Dog.prototype.constructor = Dog;
  Bird.prototype.color = "White";
  Bird.prototype.setColor = function(color) {
    color = color;
    console.log("La couleur de l'oiseau est maintenant " + color);
  }

let duck = new Bird();
  duck.setColor("Orange");
let beagle = new Dog();

// ------------ Rendre l'attribut d'un constructor innaccessible ------------
function Bird() {
  let weight = 15; // private
  // la fonction ci-dessous est une closure
  // c'est-à-dire une fonction interne au constructeur
  // elle permet d'accéder à l'attribut privé weight
  this.getWeight = function() {
    return weight;
  }
}
Bird.constructor = Bird;
let anybird = new Bird();
console.log(anybird.getWeight());

// ----------- Adapté à une classe -----------
const Person = (function() {
  let _name = ""
  
  class Person {
    constructor(name) {
      this.name = name
    }
    
    test() {
      console.log("test")
    }
    
    get name() {
      return _name
    }
    
    set name(newName) {
      _name = `(${newName})`
    }
  }
  
  return Person
})()

const x = new Person("foo")
console.log(x.name)
x.name = "bar"
console.log(x.name)

/**
 * =========================================
 *                LES CLASSES
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> LES CLASSES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

class Animals {
  constructor(type, legs) {
      this.type = type;
      this.legs = legs;
  }
  
  makeNoise(sound = 'Loud Noise') {
      console.log(sound);
  }
  
  metaData() {
      return `Type: ${this.type}, Legs: ${this.legs}`;
  }
  
  static return10() {
      return 10;
  }
}

class Cat extends Animals {
  constructor(type, legs) {
    super(type, legs);
  }
  makeNoise(sound = "meow") {
      console.log(sound);
  }
  metaData() {
    return super.metaData();
  }
}

const felix = new Cat("Félin", 4);
console.log(felix.metaData());

/**
 * =========================================
 *            FETCH, ASYNC, AWAIT
 * =========================================
 */
console.log('\r\r\r');
console.log('=====================================================================');
console.log('>>>>>>>>>>>>>>>>>>>>>>> FETCH, ASYNC, AWAIT <<<<<<<<<<<<<<<<<<<<<<<<<');
console.log('=====================================================================');

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getFirstName() {
  fetch(apiUrl)
  .then((r) => r.json())
  .then((json) => {
      console.log(json[0].name);
  }).catch((error) =>{
      console.log(`Échec : ${error}`);
  });
}
getFirstName();

async function getSecondName() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[1].name);
  } catch (error) {
    console.log(error);
  }
}
getSecondName();


