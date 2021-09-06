//refer input, text and output tags
var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputData = document.querySelector("#txt-output");


//define URL to fetch API
var minionURL = "https://api.funtranslations.com/translate/minion.json";

//adding parameters to URL
function getTranslated(value){
    return minionURL+"?text=" + value;
}

//Error handling
function errorHandler(error){
    console.log("Error occured: ",error);
    alert("Something happened with the server, try again later.");
}

//fetching data from API
function buttonClicked(){
    console.log("clicked");
    var textValue = textData.value;
    outputData.innerText = "In progress...";
    fetch(getTranslated(textValue)).then(response => response.json()).then(json => outputData.innerText = json.contents.translated)
    .catch(errorHandler);
}

//Event listener

btnTranslate.addEventListener("click", buttonClicked);