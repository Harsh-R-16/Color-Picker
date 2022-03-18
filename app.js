let buttons = document.querySelectorAll("button")
let colorBtn=[]
let backColorBtn=[]
console.log(buttons)
for (i = 0; i < buttons.length; i++){
    if (i % 2 == 0) colorBtn.push(buttons[i]); 
    else backColorBtn.push(buttons[i])
}
/*
let addEvent = function (arr) {
    arr.forEach(function (i) {
    i.addEventListener("click", function () {
        console.log(i.parentElement)
    })
})
}
addEvent(colorBtn)
addEvent(backColorBtn)
*/
colorBtn.forEach(function (i) {
    i.addEventListener("click", function () {
        let r=randomColor(0,125)
        let g=randomColor(0,125)
        let b = randomColor(0, 125)
        i.parentElement.children[2].innerText=`rgb(${r},${g},${b})`
        i.parentElement.style.color=`rgb(${r},${g},${b})`
    })
})
backColorBtn.forEach(function (i) {
    i.addEventListener("click", function () {
         let r=randomColor(125,255)
        let g=randomColor(125,255)
        let b = randomColor(125, 255)
        i.parentElement.children[4].innerText=`rgb(${r},${g},${b})`
        i.parentElement.style['background-color'] = `rgb(${r},${g},${b})`
        
    })
})


function randomColor(a, b) {
    let color = Math.floor(Math.random() * (b-a+1))+a
    return color
}
