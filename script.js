const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let generateButton = document.getElementById("btn-generate");
let rightInputBox = document.getElementById("right-input");
let leftInputBox = document.getElementById("left-input");
let characterNum = document.getElementById("passLength");
let copyButtons = document.querySelectorAll(".copy-button");


generateButton.addEventListener("click", function() {

    let numberOfCharracters = characterNum.value;
    let randomStringRight = " ";
    let randomStringLeft = " ";


    for( let i = 0; i < numberOfCharracters; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomStringRight += characters[randomIndex]
        randomIndex = Math.floor(Math.random() * characters.length)
        randomStringLeft += characters[randomIndex]
    }
    rightInputBox.value = randomStringRight;
    leftInputBox.value = randomStringLeft;

})

copyButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        let targetInput = index === 0 ? leftInputBox : rightInputBox;
        targetInput.select(); 
        document.execCommand("copy"); 
        alert("Password copied to clipboard!!"); 
    });
});