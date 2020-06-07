//when user clicks button
//recieves prompt for password criteria 
function criteria(){ 

    //gathers criteria for password 
    var char = prompt('How many characters does your password need'); 
    var num = confirm('Include numbers?');
    var specialChar = confirm('Include special chracters?'); 
    var capLetter = confirm('Include capital letters?'); 
    
    alert('Password is generating...'); 
    generate()
}

function generate(char, num, specialChar, capLetter){ 
    alert ('the function works')
}