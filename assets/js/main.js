let dark = function darks() {
    let dark_var = document.body;
    dark_var.classList.toggle('dark-mode');
    dark_var.classList.remove('blue-mode' , 'reds-mode');
}
let blue = function blues(){
    let blue_var = document.body;
    blue_var.classList.toggle('blue-mode');
    blue_var.classList.remove('dark-mode', 'reds-mode');
}
let red = function reds(){
    let red_var = document.body;
    red_var.classList.toggle('reds-mode');
    red_var.classList.remove('dark-mode' , 'blue-mode');
}