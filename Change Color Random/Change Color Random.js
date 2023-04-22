let btn = document.querySelector("#btn");

btn.addEventListener('click', randome);
function randome() {
    document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
}