//when user clicks button
//recieves prompt for password criteria 
function criteria(){ 

    //gathers criteria for password 
    var char = prompt('How many characters does your password need?'); 
    
    //returns true or false
    var num = confirm('Include numbers?'); 
    var specialChar = confirm('Include special chracters?'); 
    var capLetter = confirm('Include capital letters?'); 
    
    alert('Password is generating...'); 
    generate(char, num, specialChar, capLetter);
}

function generate(char, num, specialChar, capLetter){ 
    alert ('the function works'); 
    //the total number of characters pulled needs to equal char which is the number of characters the user wants 
    //so num + special + cap + lower = char

    //places alphabet into an array
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var int = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var symbol = 

    var password = []; 
    //take the number of characters, sets the limit for the password generator
    for (var i=0; i < char; i++){
        var random = Math.floor(Math.random() * 26);

        //pulls from 3 arrays - num, special characters, capital Letters
        if ((num == true)&&(specialChar == true)&&(capLetter == true)){

        }
        //pull from numbers, special characters
        else if ((num == true)&& (specialChar == true)){

        }
        //pull from numbers, alpha
        else if ((num == true)){

        }
        //pull from alpha only
        else{ 
            password[i] = alpha[random];
        }
    } 

    //joins array into string 
    console.log(password.join('')); 
}
