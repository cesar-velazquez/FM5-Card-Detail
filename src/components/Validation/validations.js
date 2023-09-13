// VALIDACIÓN PARA ENTRAR

// Validación para cambiar border de nombre
export const handleChangeInput = (e, setNameInput) => {    
    const errorName = document.getElementById('errorName')
    setNameInput(e.target.value)
    const inputElement = e.target
    if (e.target.value.trim() === '') {
        inputElement.style.borderColor = '#aaa6a6'
    } else if (!inputElement.checkValidity()) {
        inputElement.style.borderColor = '#fa3600'; // Cambia a rojo si es inválido
        errorName.textContent = "Wrong Format, Only letters and minimum 5"
    } else {
        inputElement.style.borderColor = '#3ded0b'; // Cambia a verde si es válido
        errorName.textContent = ""
    }
}
//validación para cardNumber
// export const GenerateSpace = (e, setCardNumber) => {
//     const inputElement = e.target
//     const inputValue = e.target.value.replace(/\s/g, "");
//     const errorMessage = document.getElementById("errors")
//     setCardNumber(e.target.value)
//     if (inputValue.trim() === '') {
//         inputElement.style.borderColor = "#aaa6a6"
//         setCardNumber("");
//     } else if (/^[0-9\s]*$/.test(inputValue) && inputValue.length == 16) {
//         inputElement.style.borderColor = "#3ded0b";
//         errorMessage.textContent = ""
//     } else {
//         inputElement.style.borderColor = "#fa3600";
//         errorMessage.textContent = "Wrong Format, numbers only"
//     }
//     const formattedValue = inputValue.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
//     setCardNumber(formattedValue);
// }

//Validación para cambiar border 
export const GenerateMM = (e) => {
    const inputElement = e.target        
    const errormm = document.getElementById('errormm')
    const valuemm = inputElement.value
    if (valuemm.trim() === '') {
        inputElement.style.borderColor = "#aaa6a6"
    } else if (/^[0-9\s]*$/.test(valuemm) && valuemm.length == 2) {
        inputElement.style.borderColor = "#3ded0b";
        errormm.textContent = ""
    } else {
        inputElement.style.borderColor = "#fa3600";
        errormm.textContent = "Wrong Format. Numbers only, minimum 2"
    }
}

export const Generatemmyy = (e) => {
    const inputElement = e.target
    const erroryy = document.getElementById('erroryy')
    const valuemmyy = inputElement.value
    if (valuemmyy.trim() === '') {
        inputElement.style.borderColor = "#aaa6a6"            
    } else if (/^[0-9\s]*$/.test(valuemmyy) && valuemmyy.length == 2) {
        inputElement.style.borderColor = "#3ded0b";
        erroryy.textContent = ""
    } else {
        inputElement.style.borderColor = "#fa3600";
        erroryy.textContent = "Wrong Format. Numbers only the last 2 digits"
    }
}
export const Generatecvc = (e) => {
    const inputElement = e.target
    const errorcvc = document.getElementById('errorcvc')
    const valuecvc = inputElement.value        
    if (valuecvc.trim() === '') {
        inputElement.style.borderColor = "#aaa6a6"            
    } else if (/^[0-9\s]*$/.test(valuecvc) && valuecvc.length == 3) {
        inputElement.style.borderColor = "#3ded0b";
        errorcvc.textContent = ""            
    } else {
        inputElement.style.borderColor = "#fa3600";
        errorcvc.textContent = "Wrong Format. Numbers only 3 digits"
    }
}