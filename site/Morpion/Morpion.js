let modele = ["", "", "", "", "", "", "", "", ""]; 
let tour = true;
console.log(modele);
console.log(modele[0]);

function updateView() {
    console.log("MODELE CHANGE");
    document.getElementById("1").innerText = modele[0];
    document.getElementById("2").innerText = modele[1];
    document.getElementById("3").innerText = modele[2];
    document.getElementById("4").innerText = modele[3];
    document.getElementById("5").innerText = modele[4];
    document.getElementById("6").innerText = modele[5];
    document.getElementById("7").innerText = modele[6];
    document.getElementById("8").innerText = modele[7];
    document.getElementById("9").innerText = modele[8];
}

function resetModel() {
    console.log("REINITIALISE");
    modele = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("messageVictoire").innerText = "";

}

function doubleSeizure(id, lettre) {
    if (modele[id] == "") {
        modele[id] = lettre;
        tour = !tour;
    } else {
    console.log("DOUBLE SAISIE");
    }
}

function victory() {

    if (modele[0] == modele[1] && modele[0] == modele[2] && modele[0] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[0] == modele[3] && modele[0] == modele[6] && modele[0] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[0] == modele[4] && modele[0] == modele[8] && modele[0] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[3] == modele[4] && modele[3] == modele[5] && modele[3] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[6] == modele[7] && modele[6] == modele[8] && modele[6] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[1] == modele[4] && modele[1] == modele[7] && modele[1] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[2] == modele[5] && modele[2] == modele[8] && modele[2] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }

    if (modele[2] == modele[4] && modele[2] == modele[6] && modele[2] != "") {
        console.log("VICTOIRE");
        document.getElementById("messageVictoire").innerText = "VICTOIRE!!!!";
        console.log("FIN DU JEU");
    }
}



updateView();

// MISE A JOUR

modele = ["", "", "", "", "", "", "", "", ""];



console.log(modele);

console.log(modele[0]);
updateView();

// document.getElementById("reset").addEventListener("click", resetModele);
document.getElementById("reset").addEventListener("click", evt => {
    resetModel();
    updateView();
});


document.getElementById("1").addEventListener("click", evt => {
    console.log("click on 1");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(0, (tour ? "X" : "O"));
    updateView();
    victory();

});
document.getElementById("2").addEventListener("click", evt => {
    console.log("click on 2");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(1, (tour ? "X" : "O"));
    updateView();
    victory();



});
document.getElementById("3").addEventListener("click", evt => {
    console.log("click on 3");
    console.log(/*evt.target.id,*/(tour ? "X" : "O"));
    doubleSeizure(2, (tour ? "X" : "O"));
    updateView();
    victory();



});
document.getElementById("4").addEventListener("click", evt => {
    console.log("click on 4");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(3, (tour ? "X" : "O"));
    updateView();
    victory();


});
document.getElementById("5").addEventListener("click", evt => {
    console.log("click on 5");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(4, (tour ? "X" : "O"));
    updateView();
    victory();


});
document.getElementById("6").addEventListener("click", evt => {
    console.log("click on 6");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(5, (tour ? "X" : "O"));
    updateView();
    victory();


});
document.getElementById("7").addEventListener("click", evt => {
    console.log("click on 7");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(6, (tour ? "X" : "O"));
    updateView();
    victory();


});
document.getElementById("8").addEventListener("click", evt => {
    console.log("click on 8");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(7, (tour ? "X" : "O"));
    updateView();
    victory();


});
document.getElementById("9").addEventListener("click", evt => {
    console.log("click on 9");
    console.log(/*evt.target.id,*/ (tour ? "X" : "O"));
    doubleSeizure(8, (tour ? "X" : "O"));
    updateView();
    victory();

});
