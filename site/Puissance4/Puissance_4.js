let j1Color;
let j2Color;

document.getElementById("start").addEventListener("click", () => {
    console.log("start");
    j1Color = document.getElementById("j1_color").value;
    console.log(j1Color);
    j2Color = document.getElementById("j2_color").value;
    console.log(j2Color);
    if (j1Color == "" || j2Color ==""){
        j1Color = "red";
        j2Color ="yellow";
    }
    document.getElementById("div_color").style.display = "none";
    document.querySelector("#grid_p4").style.display = "";
    document.querySelector("#zone_appuie").style.display = "grid";
    document.querySelector("#reset").style.display = "";
    document.getElementById("choice").style.display = "";
})

document.getElementById("choice").addEventListener("click", () => {
    j1Color = "";
    console.log(j1Color)
    j2Color = "";
    console.log(j2Color)
    document.getElementById("div_color").style.display = "";
    document.querySelector("#grid_p4").style.display = "none";
    document.querySelector("#zone_appuie").style.display = "none";
    document.querySelector("#reset").style.display = "none";
    document.getElementById("choice").style.display = "none";
})
document.getElementById("grid_p4").style.display = "none";
document.getElementById("zone_appuie").style.display = "none";
document.getElementById("reset").style.display = "none";
document.getElementById("choice").style.display = "none";

let column1 = ["", "", "", "", "", ""];
let column2 = ["", "", "", "", "", ""];
let column3 = ["", "", "", "", "", ""];
let column4 = ["", "", "", "", "", ""];
let column5 = ["", "", "", "", "", ""];
let column6 = ["", "", "", "", "", ""];
let column7 = ["", "", "", "", "", ""];
let model = [
    column1[0], column2[0], column3[0], column4[0], column5[0], column6[0], column7[0],
    column1[1], column2[1], column3[1], column4[1], column5[1], column6[1], column7[1],
    column1[2], column2[2], column3[2], column4[2], column5[2], column6[2], column7[2],
    column1[3], column2[3], column3[3], column4[3], column5[3], column6[3], column7[3],
    column1[4], column2[4], column3[4], column4[4], column5[4], column6[4], column7[4],
    column1[5], column2[5], column3[5], column4[5], column5[5], column6[5], column7[5]
];

let tour = true;

function updateModel() {
    model = [
        column1[0], column2[0], column3[0], column4[0], column5[0], column6[0], column7[0],
        column1[1], column2[1], column3[1], column4[1], column5[1], column6[1], column7[1],
        column1[2], column2[2], column3[2], column4[2], column5[2], column6[2], column7[2],
        column1[3], column2[3], column3[3], column4[3], column5[3], column6[3], column7[3],
        column1[4], column2[4], column3[4], column4[4], column5[4], column6[4], column7[4],
        column1[5], column2[5], column3[5], column4[5], column5[5], column6[5], column7[5]
    ];
}

function updateView() {
    for (let i = 0; i < 42; i++) {
        document.getElementById(i).style.backgroundColor = (model[i])
        // console.log(model[i])
    }
}

updateView()

for (let i = 0; i < 7; i++) {
    let id = "za" + i;
    document.getElementById(id).addEventListener("mouseenter", () => {
        document.getElementById(id).style.backgroundColor = (tour ? j1Color : j2Color);
    })
    document.getElementById(id).addEventListener("mouseleave", () => {
        document.getElementById(id).style.backgroundColor = "";
    })
    document.getElementById(id).addEventListener("click", () => {
        console.log(id)
        for (let j = 6; j > -1; j--) {
            if (column1[j] == "" && id == "za0") {
                column1[j] = (tour ? j1Color : j2Color)
                // console.log(column1)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column2[j] == "" && id == "za1") {
                column2[j] = (tour ? j1Color : j2Color)
                // console.log(column2)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column3[j] == "" && id == "za2") {
                column3[j] = (tour ? j1Color : j2Color)
                // console.log(column3)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column4[j] == "" && id == "za3") {
                column4[j] = (tour ? j1Color : j2Color)
                // console.log(column4)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column5[j] == "" && id == "za4") {
                column5[j] = (tour ? j1Color : j2Color)
                // console.log(column5)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column6[j] == "" && id == "za5") {
                column6[j] = (tour ? j1Color : j2Color)
                // console.log(column6)
                updateModel()
                updateView()
                tour = !tour
                return
            } else if (column7[j] == "" && id == "za6") {
                column7[j] = (tour ? j1Color : j2Color)
                // console.log(column7)
                updateModel()
                updateView()
                tour = !tour
                return
            }
            victory()
        }
    })
};

function resetModel() {
    for (let i = 0; i < 42; i++) {
        document.getElementById(i).style.backgroundColor = "";
        // console.log("white")
    }
    column1 = ["", "", "", "", "", ""]
    column2 = ["", "", "", "", "", ""]
    column3 = ["", "", "", "", "", ""];
    column4 = ["", "", "", "", "", ""];
    column5 = ["", "", "", "", "", ""];
    column6 = ["", "", "", "", "", ""];
    column7 = ["", "", "", "", "", ""];
    tour = true
};

document.getElementById("reset").addEventListener("click", () => {
    console.log("reset");
    resetModel();
});

function victory(){
    console.log("victoire " + j1Color)
}