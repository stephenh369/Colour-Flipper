const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    function random_bg_color() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        const bgColor = "RGB(" + r + "," + g + "," + b + ")";
        return bgColor
    }
       const bgColor = document.body.style.background = random_bg_color();
        color.textContent = bgColor;
})
//if the RGB text is removed from bgColor, background stops changing color??