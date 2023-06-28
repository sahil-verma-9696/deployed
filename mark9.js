class calculator {
    gloabalVariable = {
        primaryRowObject: document.querySelector("#p-row"),
        primaryColObject: document.querySelector("#p-column"),
        secondryRowObject: document.querySelector("#s-row"),
        secondryColObject: document.querySelector("#s-column"),
        primaryMat: document.querySelector("#primaryMat"),
        secondryMat: document.querySelector("#secondryMat"),
        answerMatObj: document.querySelector("#answerMat"),
        modes: document.querySelector("#mode"),
        operator: document.querySelector("#operator"),
        text: document.querySelectorAll(".secMat-text"),
        primaryConstant: document.querySelector("#p-constant"),
        secondryConstant: document.querySelector("#s-constant"),
        inputMat: document.querySelector("#inputMat")
    }

    
}

let x = new calculator();

console.log(x.gloabalVariable)