const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const selector1 = document.querySelector("#selector1")
const selector2 = document.querySelector("#selector2")
console.log(selector1.children)
console.log(selector2.children)

if (selector1.children == [0] && selector2.children == [1]) {
    btn.addEventListener("click", function(){
        const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
     return hex.length === 1 ? '0' + hex : hex
        }).join('')
        
        
    })
    const rgbToHex = document.body.style.background = rgbToHex
        color.textContent = rgbToHex
}
