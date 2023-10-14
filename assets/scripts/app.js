// 디폴트 값
const defaultResult = 0;

// 디폴트값을 보여주는 변수
let currentResult = defaultResult;

let logEntries = [];

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
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        nextResult: enteredNumber,
        totalResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries[0].operation);
}

// 사칙연산 함수
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

// 사칙연산 함수
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('X', initialResult, enteredNumber);
}

// 사칙연산 함수
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

// 이벤트 리스너
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

