/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/utils/inputs-are-valid.js
const inputsAreValid = (...inputs) => {
    return inputs.every(num => typeof num === "number" && !isNaN(num))
}
;// CONCATENATED MODULE: ./src/app/utils/parse-inputs.js
const parseInputs = (...inputs) => {
    return inputs.map(str => parseInt(str))
}
;// CONCATENATED MODULE: ./src/app/app.js




const run = (alertService, componentService) => {
    alertService.hideErrors()
    componentService.onClick(() => {
        alertService.hideErrors()
        const inputs = componentService.getInputs()
        const parsedInputs = parseInputs(...inputs)
        if (inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            componentService.setResults(numA + numB)
        } else {
            componentService.setResults("");
            alertService.handleAdditionError(inputs, parsedInputs)
        }
    })
}
;// CONCATENATED MODULE: ./src/app/alert.service.js

class AlertService {
    constructor() {
        this.errorBox = document.getElementById("error")
    }

    handleAdditionError = (inputs, numbers) => {
        const fullmessage = inputs.reduce((message, str, index) => {
            if (inputsAreValid(numbers[index])) {
                return message + ""
            } else {
                return message + `${str} is not a number`
            }
        }, "please enter two valid numbers!")

        this.errorBox.classList.remove("invisible")
        this.errorBox.innerText = fullmessage
    }

    hideErrors = () => {
        this.errorBox.classList.add("invisible")
    }
}
;// CONCATENATED MODULE: ./src/app/component.service.js
class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne")
        this.numberTwoInput = document.getElementById("numberTwo")
        this.addValuesButton = document.getElementById("addValues")
        this.resultDiv = document.getElementById("result")
        this.errorBox = document.getElementById("error")
    }
    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value]
    }

    setResults(str) {
        this.resultDiv.innerText = str;
    }

    onClick(cb) {
        this.addValuesButton.addEventListener("click", cb)
    }
}
;// CONCATENATED MODULE: ./src/index.js





const alertService = new AlertService()
const componentService = new ComponentService();
console.log("this is the API for development")
run(alertService, componentService) 
/******/ })()
;