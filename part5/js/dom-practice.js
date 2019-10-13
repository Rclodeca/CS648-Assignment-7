/*eslint-env browser*/

//STEP 1
function clickMe(){
    window.alert("I have been clicked");
}
//STEP 2
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
$("myButton").onclick = clickMe;

//STEP 3
$("myButton2").addEventListener("click", clickMe); 

//STEP 4
$("myButton2").addEventListener("click", () => {
    window.alert("I have been clicked");
}); 

//STEP 5
window.addEventListener("load", function () {
    $("myButton2").addEventListener("click", () => {
        window.alert("I have been clicked");
    }); 
});

