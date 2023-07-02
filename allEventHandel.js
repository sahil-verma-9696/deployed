let flag = "Addition";
calc.element.text[1].style.display = "none";
calc.element.text[2].style.display = "none";
calc.element.text[3].style.display = "none";
calc.element.operator.style.display = "none"
calc.element.secondryConstant.style.display = "none";
calc.element.primaryConstant.style.display = "none";
calc.element.secondryRowObject.style.display = "none";
calc.element.secondryColObject.style.display = "none";
calc.element.primaryMat.style.display = "none"
calc.element.secondryMat.style.display = "none"

// =========================== Modes selection =================== 

calc.element.modes.addEventListener("click", (event) => {
    if (calc.element.modes.value == "Addition") {
        calc.element.operator.value = "+";
        calc.element.text[0].style.display = "inline";
        calc.element.text[1].style.display = "none";
        calc.element.text[2].style.display = "none";
        calc.element.text[3].style.display = "none";
        calc.element.secondryRowObject.style.display = "none";
        calc.element.secondryColObject.style.display = "none";
        flag = "Addition";
    }
    if (calc.element.modes.value == "Subtraction") {
        calc.element.operator.value = "-";
        calc.element.text[0].style.display = "inline";
        calc.element.text[1].style.display = "none";
        calc.element.text[2].style.display = "none";
        calc.element.text[3].style.display = "none";
        calc.element.secondryRowObject.style.display = "none";
        calc.element.secondryColObject.style.display = "none";
        flag = "Subtraction";
    }
    if (calc.element.modes.value == "Multiplication") {
        calc.element.operator.value = "x";
        calc.element.text[0].style.display = "none";
        calc.element.text[1].style.display = "inline";
        calc.element.text[2].style.display = "inline";
        calc.element.text[3].style.display = "inline";
        calc.element.secondryRowObject.style.display = "inline";
        calc.element.secondryColObject.style.display = "inline";
        flag = "Multiplication";

    }
    if (calc.element.modes.value == "Determinant") {
        calc.element.text[0].style.display = "inline";
        calc.element.text[1].style.display = "none";
        calc.element.text[2].style.display = "none";
        calc.element.text[3].style.display = "none";
        calc.element.operator.style.display = "none"
        calc.element.secondryConstant.style.display = "none";
        calc.element.primaryConstant.style.display = "none";
        calc.element.secondryRowObject.style.display = "none";
        calc.element.secondryColObject.style.display = "none";
        flag = "Determinant";
    }

})

// =========================== order complete =================== 
function primRowMove() {// run when keyup on p-row ip
    if (calc.element.primaryRowObject.value.length == 1) {
        calc.element.primaryColObject.focus();
    }
}
function primColMove() {// run when keyup on p-col ip
    
    row = parseInt(calc.element.primaryRowObject.value);
    col = parseInt(calc.element.primaryColObject.value);

    if (calc.element.modes.value == "Multiplication") {
        calc.element.secondryColObject.focus();
        calc.element.secondryRowObject.value = calc.element.primaryColObject.value;
    } else {
        calc.element.inputMat.focus();
    }
}

function secondRowMove() {// run when keyup on s-row ip
    if (calc.element.primaryRowObject.value.length == 1) {
        calc.element.secondryColObject.focus();
    }
}
function secondColMove() {// run when keyup on s-col ip
    sCol = parseInt(calc.element.secondryColObject.value);
    if (calc.element.primaryRowObject.value.length == 1) {
        calc.element.inputMat.focus();
    }
}

calc.element.primaryRowObject.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        calc.element.primaryColObject.focus();
    }
});

calc.element.primaryColObject.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        calc.element.inputMat.focus();
    }

    if (calc.element.primaryRowObject.value.length > 1 && calc.element.primaryColObject.value.length > 1) {
        alert("Enter value is high")
    }

});
inputMat.addEventListener("click", (event) => {
    calc.element.text[0].style.display = "inline";
    calc.element.text[1].style.display = "none";
    calc.element.text[2].style.display = "none";
    calc.element.text[3].style.display = "none";
    calc.element.operator.style.display = "inline"
    calc.element.secondryConstant.style.display = "inline";
    calc.element.primaryConstant.style.display = "inline";
    calc.element.primaryMat.style.display = "inline";
    calc.element.secondryMat.style.display = "inline";
})
