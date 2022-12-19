import { inputsAreValid } from './utils/inputs-are-valid'
export class AlertService {
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