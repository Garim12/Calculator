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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        nextResult: operationNumber,
        totalResult: newResult
    };
    logEntries.push(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (
        calculationType !== 'add' &&
        calculationType !== 'subtract' &&
        calculationType !== 'multiply' &&
        calculationType !== 'divide' ||
        !enteredNumber
    ) {
        return;

    }

    if (calculationType === 'add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } else {
        alert('잘못된 입력입니다. 오류이유 = calculationType (' + calculationType + ')');
        return;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// 사칙연산 함수
function add() {
    calculateResult('add');
}

// 사칙연산 함수
function subtract() {
    calculateResult('subtract');
}

// 사칙연산 함수
function multiply() {
    calculateResult('multiply');
}

// 사칙연산 함수
function divide() {
    calculateResult('divide');
}

// 이벤트 리스너
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);