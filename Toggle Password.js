
var myInput = document.querySelector("#myInput");
var myButton = document.querySelector("#btn");

myButton.onclick = function() {
    if(myButton.getAttribute('data-text') == "show") {
        myInput.setAttribute('type', 'text');
        myButton.setAttribute('data-text', 'hide');
        myButton.innerHTML = "Hide";
    }else {
        myInput.setAttribute('type', 'password');
        myButton.setAttribute('data-text', 'show');
        myButton.innerHTML = "Show";
    }
}
