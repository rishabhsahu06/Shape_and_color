let colorsChange = document.querySelector("#color")
let btn = document.querySelectorAll(".btn")
btn[1].addEventListener('click', randomColor)
btn[0].addEventListener('click', changeShape)

console.log(btn)
// console.log(randomColor)
// console.log(btn)


function randomColor(){
    let str = "0123456789abcdef"
    let colorStr = "#"
    for (let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*str.length)
        colorStr+=str[randomIndex]

        
    }
    colorsChange.style.backgroundColor = colorStr 
}
randomColor()

function changeShape(){
    let shape = ["circle", "triangle", "square", "pentagon", "cut-diamond"]
    let randomIndex = Math.floor(Math.random()* shape.length)
    document.querySelector(".shape>div").setAttribute("id", shape[randomIndex])
}
