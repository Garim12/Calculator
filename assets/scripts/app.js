const defaultResult = 0;

let currentResult = defaultResult;

// 유저로 부터 입력받는 값
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 결과를 출력하는 함수
function createAndWriteOutput(operator, resultBeforCalc, calcNumber) {
    const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

// 사칙연산 함수
function add() {
    const enteredNumber = getUserNumberInput();
    createAndWriteOutput('+', currentResult, enteredNumber);
    currentResult = currentResult + enteredNumber;
}

// 사칙연산 함수
function subtract() {
    const enteredNumber = getUserNumberInput();
    createAndWriteOutput('-', currentResult, enteredNumber);
    currentResult = currentResult - enteredNumber;
}

// 사칙연산 함수
function multiply() {
    const enteredNumber = getUserNumberInput();
    createAndWriteOutput('X', currentResult, enteredNumber);
    currentResult = currentResult * enteredNumber;
}

// 사칙연산 함수
function divide() {
    const enteredNumber = getUserNumberInput();
    createAndWriteOutput('/', currentResult, enteredNumber);
    currentResult = currentResult / enteredNumber;
}

// 이벤트 리스너
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

