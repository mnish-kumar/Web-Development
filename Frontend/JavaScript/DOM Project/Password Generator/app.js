const inputSlider = document.querySelector("[data-lengthSlider]");
const dataLength = document.querySelector("[data-length]");
const copyBtn = document.querySelector("[data-copyButton]");
const dataPasswordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const dataIndicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("[data-generate]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");


let password = "";
let passwordLength = 10;
let checkboxCount = 1;
const symbol = "!@#$%^&*()-_=+[]{}\\|:'\",.<>/?~`";


handleSlider()
// slider handle
function handleSlider(){
    inputSlider.value = passwordLength;
    dataLength.innerText = passwordLength;
}
function setIndicator(color){
    dataIndicator.style.backgroundColor = color;
    dataIndicator.style.borderRadius = "50%";
    dataIndicator.style.boxShadow = `0 0 10px ${color}`;
    dataIndicator.style.width = "17px"
    dataIndicator.style.height = "17px"
}



function getRandonInetegr(min , max){
    return Math.floor(Math.random() * (max - min)) + min;
}




function generateRandomNumber(){
    return getRandonInetegr(0 , 10);
}
function generateLowerCase(){
    return String.fromCharCode(getRandonInetegr(97 , 123));
}
function generateUpperCase(){
    return String.fromCharCode(getRandonInetegr(65 , 91));
}
function generateSymbol(){
    const randNum = getRandonInetegr(0, symbol.length);
    return symbol.charAt(randNum);
}

function calStrength(){
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasSymb = symbolsCheck.checked;
    let hasNum = numbersCheck.checked;

    if (hasLower && hasUpper && (hasNum || hasSymb) && passwordLength >= 8){
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasSymb || hasNum) && passwordLength >= 6){
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}



async function copyContent(){
    try{
        await navigator.clipboard.writeText(dataPasswordDisplay.value);
        copyMsg.innerText = "copy"
    }catch(e){
        copyMsg.innerText = "Failed"
    }

    copyMsg.classList.add("active");


    setTimeout(() => {
        copyMsg.classList.remove("active")
    }, 2000);
    
}




inputSlider.addEventListener('input', (e) =>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', function(){
    if(dataPasswordDisplay.value)
        copyContent()
})


function handleCheckBox() {
    checkboxCount = 0;
    allCheckBox.forEach(function(checkBox) {
        if (checkBox.checked) {
            checkboxCount++;
        }
    });
}
allCheckBox.forEach((checkBox) => {
    checkBox.addEventListener('change', handleCheckBox)
})



function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

generateBtn.addEventListener('click', function(){
    // if none these are slected
    if (checkboxCount <= 0) return;
    if(passwordLength < checkboxCount){
        passwordLength = checkboxCount;
        handleSlider();
    }

    // find new password journey
    password = "";
    // if(uppercaseCheck){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck){
    //     password += generateLowerCase();
    // }
    // if(symbolsCheck){
    //     password += generateSymbol();
    // }
    // if(numbersCheck){
    //     password += getRandonInetegr();
    // }

    let arr =[];

    if (uppercaseCheck.checked) arr.push(generateUpperCase());
    if (lowercaseCheck.checked) arr.push(generateLowerCase());
    if (symbolsCheck.checked) arr.push(generateSymbol());
    if (numbersCheck.checked) arr.push(generateRandomNumber());

    for (let i =0; i < arr.length; i++){
        password += arr[i];
    }

    for (let i =0; i< passwordLength - arr.length; i++){
        let rndIndex = getRandonInetegr(0 , arr.length);
        password += arr[rndIndex];
    }


    // shuffle password
    password = shuffle(Array.from(password));

    dataPasswordDisplay.value = password;
    
    calStrength()
})