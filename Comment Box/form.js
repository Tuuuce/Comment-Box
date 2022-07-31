var myText = document.getElementById("comment");
var result = document.getElementById("result");
var limit = 140;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#31821b";
        result.style.color = "#31821b";
    }
});