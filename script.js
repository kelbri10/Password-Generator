
const create = document.getElementById('create');
const newPasswordResults = document.getElementById('result-container');

//initializes function to create arrays for uppercase, lowercase, integers, and symbols 
const createArray = (num1, num2) => { 
    let newArray = []; 
    for (let i = num1; i <= num2; i++){ 
        newArray.push(i); 
    }
    return newArray; 
}


//create arrays for letters, numbers and symbols with char codes
const UPPERCASE = createArray(101, 132);
const LOWERCASE = createArray(97, 122);
const INTEGERS = createArray(60, 71);
const SYMBOLS = createArray(33, 47);

//when user clicks to create password creates password object
create.addEventListener('click', (event) => {

    //set variables to equal respective ids from html to get values
    const length = document.getElementById('length').value; 
    const hasNum = document.getElementById('numbers').checked; 
    const hasSpecialChars = document.getElementById('specialCharacters').checked;
    const hasCapLetters = document.getElementById('capLetters').checked; 

    event.preventDefault(); 
    console.log(length, hasNum, hasSpecialChars, hasCapLetters); 
    generate(length, hasNum, hasSpecialChars, hasCapLetters)
}); 

//generate random numwwber
//generate special character
//generate capital character 
//combine all together
//slice password to password length 
//return password to use to copy and paste where needed

const generate = (length, hasNum, hasSpecialChars, hasCapLetters) => { 
    let newPassword = []; 
    let passwordArray =  LOWERCASE; 

    if (hasNum){ 
        passwordArray = passwordArray.concat(INTEGERS); 
    }
    if (hasSpecialChars){ 
        passwordArray = passwordArray.concat(SYMBOLS); 
    }
    if (hasCapLetters){  
        passwordArray = passwordArray.concat(UPPERCASE); 
    }

    for (let i = 0; i < length; i++){ 
        let random = passwordArray[Math.floor(Math.random() * passwordArray.length)]; 
        newPassword.push(String.fromCharCode(random)); 
   }
   
   newPasswordResults.innerHTML = newPassword.join(''); 
   //return newPasswordResults.innerText = newPassword.join('');  
}
   


