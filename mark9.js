class calculator {

    // element form dom
    element = {
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

    // this method append matrix position = primary,secondry
    // choice = fill, zero
    appendMatrix(row, col, position, choice, mat) {

        if (position == "answer" && choice == "fill") {
            this.element.answerMatObj.innerHTML = "";
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = mat[i][j];

                    // assigning class to new matrix
                    newMat.classList = 'p-row-col_' + i + "" + j;
                    this.element.answerMatObj.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.answerMatObj.appendChild(br);

            }
        }
        if (position == "primary" && choice == "fill-answer") {
            this.element.primaryMat.innerHTML = "";
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = mat[i][j];

                    // assigning class to new matrix
                    newMat.classList = 'p-row-col_' + i + "" + j;
                    this.element.primaryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.primaryMat.appendChild(br);

            }
        }
        if (position == "secondry" && choice == "fill-answer") {
            this.element.secondryMat.innerHTML = "";
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = mat[i][j];

                    // assigning class to new matrix
                    newMat.classList = 'p-row-col_' + i + "" + j;
                    this.element.secondryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.secondryMat.appendChild(br);

            }
        }
        if (position == "primary" && choice == "fill") {
            let k = 1;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = k;

                    k++;

                    // assigning class to new matrix
                    newMat.classList = 'p-row-col_' + i + "" + j;
                    this.element.primaryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.primaryMat.appendChild(br);

            }
        }
        if (position == "primary" && choice == "zero") {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = 0;

                    // assigning class to new matrix
                    newMat.classList = 'p-row-col_' + i + "" + j;
                    this.element.primaryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.primaryMat.appendChild(br);

            }
        }
        if (position == "secondry" && choice == "fill") {
            let k = 1;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = k;
                    k++;

                    // assigning class to new matrix
                    newMat.classList = 's-row-col_' + i + "" + j;
                    this.element.secondryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.secondryMat.appendChild(br);

            }
        }
        if (position == "secondry" && choice == "zero") {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {

                    // creating new Matrix for input 
                    let newMat = document.createElement("input");
                    newMat.type = 'number';
                    newMat.value = 0;

                    // assigning class to new matrix
                    newMat.classList = 's-row-col_' + i + "" + j;
                    this.element.secondryMat.appendChild(newMat);
                }

                // adding break line tag
                let br = document.createElement("br");
                this.element.secondryMat.appendChild(br);

            }
        }
    }

    // this method form matrix choice = fill,blank,zero,primary,secondry
    getMatrix(row, col, choice) {

        // creating matrix
        let mat = new Array(row);
        for (let i = 0; i < row; i++) {
            mat[i] = new Array(col);
        }

        // fill the matrix with secondry matrix
        if (choice == "secondry") {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    //variable matrix feed by user input
                    mat[i][j] = parseInt(document.querySelector(".s-row-col_" + i + "" + j).value);
                }
            }
        }
        // fill the matrix with primary matrix
        if (choice == "primary") {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    //variable matrix feed by user input
                    mat[i][j] = parseInt(document.querySelector(".p-row-col_" + i + "" + j).value);
                }
            }
        }

        //fill the matrix with zero 
        if (choice == "zero") {
            let k = 1;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    mat[i][j] = 0;
                    k++;
                }
            }
        }

        // fill the matrix with 1,2,3....
        if (choice == "fill") {
            let k = 1;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    mat[i][j] = k;
                    k++;
                }
            }
        }

        // return empty matrix
        if (choice == "blank") {
            return mat;
        }

        return mat;
    }

    // this method add two given matrix
    addition(mat1, mat2, row, col) {

        let c = this.getMatrix(row, col, "blank");

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                c[i][j] = mat1[i][j] + mat2[i][j];
            }
        }

        return c;
    }
    subtraction(mat1, mat2, row, col) {

        let c = this.getMatrix(row, col, "blank");

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                c[i][j] = mat1[i][j] - mat2[i][j];
            }
        }

        return c;
    }
    multiplication(mat1, mat2, pRow, pCol, sCol) {

        let c = this.getMatrix(pRow, pCol, "blank");

        for (let i = 0; i < pRow; i++) {
            for (let j = 0; j < sCol; j++) {
                let x = 0;
                for (let k = 0; k < pCol; k++) {
                    x += (mat1[i][k] * mat2[k][j]);
                }
                c[i][j] = x;
            }
        }

        return c;
    }


}

let calc = new calculator();
let row = 0;
let col = 0;
let sCol = 0;


function enterFun() {
    calc.appendMatrix(row, col, "primary", "zero");
    calc.appendMatrix(row, col, "secondry", "zero");
}

function answerFun() {

   

    let a = calc.getMatrix(row, col, "primary");
    let b = calc.getMatrix(row, col, "secondry");
    if (flag == "Addition") {
        calc.appendMatrix(row, col, "answer", "fill", calc.addition(a, b, row, col));
        return calc.addition(a,b,row,col);
    }
    if (flag == "Subtraction") {
        calc.appendMatrix(row, col, "answer", "fill", calc.subtraction(a, b, row, col));
    }
    if (flag == "Multiplication") {
        calc.appendMatrix(row, col, "answer", "fill", calc.multiplication(a, b, row, col, sCol));
    }
}

function prevAnsewerAtPrimary(){
    calc.appendMatrix(row,col,"primary","fill-answer",answerFun())
}
function prevAnsewerAtSecondry(){
    calc.appendMatrix(row,col,"secondry","fill-answer",answerFun())
}