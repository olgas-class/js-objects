// const studentsNames = ["Marco", "Chiara"];
// const studentsLastNames = ["Bianchi", "Rossi", "Verdi"];

// Dichiarare
const person = {
    name: "Marco",
    lastName: "Bianchi",
    age: 18,
    friends: ["Maria", "Pietro"],
    car: {
        brand: "Fiat",
        type: "Tipo"
    }
};

const anotherPerson = {
    name: "Olga",
    lastName: "Demina",
    age: 37,
    friends: ["Loredana", "Martina"],
    car: {
        brand: "Audi",
        type: "A7"
    }
}

const personArray = [person, anotherPerson];

const newPerson = {
    name: prompt("Dimmi il tuo nome"),
    lastName: prompt("Dimmi il tuo cognome")
};

personArray.push(newPerson);
console.log(personArray);

// 
// console.log(person);
// 
// // Legere 
// console.log(person.name);
// console.log(person["age"]);
// // // 
// // const key = prompt("Quale caratteristica vuoi vedere?");
// // console.log(person[key]);
// 
// const friends = person.friends[0]; // --> array di amici
// console.log(friends);
// 
// console.log(person.car.brand);
// 
// // Scrivere
// // const userName = prompt("Qual'è il nuovo cognome di Marco?");
// 
// // person.lastName = userName;
// person["age"] = 19;
// 
// person.gender = "maschio";
// 
// console.log(person);
// 
// const userName = prompt("Dimmi il tuo nome");
// const userLastName = prompt("Dimmi il tuo cognome");
// 
// const newPerson = {
//     name: userName,
//     lastName: userLastName
// }
// 
// console.log(newPerson);

// Stampare tutte le proprietà di un oggetto
// Stampare tutte le proprietà tranne età
for (let key in person) {
    //          name, person["name"]
    //          lastName, person["lastName"]
    if (key !== "age") {
        console.log(key, person[key]);
    }
}