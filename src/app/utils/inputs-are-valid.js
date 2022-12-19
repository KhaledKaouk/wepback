export const inputsAreValid = (...inputs) => {
    return inputs.every(num => typeof num === "number" && !isNaN(num))
}