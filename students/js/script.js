const studentsArray = [
    {
        nome: "Alberto",
        cognome: "Baglivi",
        votoMedio: 7
    },
    {
        nome: "Leonardo",
        cognome: "Grazioli",
        votoMedio: 8
    }
];

console.log(studentsArray);

const studentsRow = document.querySelector(".row");

for (let i = 0; i < studentsArray.length; i++) {
    const currentStudent = studentsArray[i];
    studentsRow.innerHTML += `
        <div class="card">
            <h2>${currentStudent.nome} ${currentStudent.cognome}</h2>
            <p>Voto: ${currentStudent.votoMedio}</p>
        </div>
    `;
}

const nameInput = document.getElementById("name");
const lastNameInput =  document.getElementById("last-name");
const voteInput = document.getElementById("vote");

document.getElementById("insert-btn").addEventListener("click", function() {
   // Prelevare tutti i dati dalla form;
   const studentName = nameInput.value;
   const studentLastName = lastNameInput.value;
   const studentVote = parseInt(voteInput.value);
   
    const newStudent = {
        nome: studentName,
        cognome: studentLastName,
        votoMedio: studentVote
    }

    // Inserimento dello studente nell'array
    studentsArray.push(newStudent);

    // Aggiungere l'elemento alla lista
    studentsRow.innerHTML += `
        <div class="card">
            <h2>${newStudent.nome} ${newStudent.cognome}</h2>
            <p>Voto: ${newStudent.votoMedio}</p>
        </div>
    `;
});

// const studentName = prompt("Inserisci un nome");
// const studentLastName = prompt("Inserisci cognome");
// const studentVote = parseInt(prompt("Inserisci voto medio"));
// 
// const newStudent = {
//     nome: studentName,
//     cognome: studentLastName,
//     votoMedio: studentVote
// };
// 
// studentsArray.push(newStudent);
// 
// console.log(studentsArray);