const canvas = document.querySelector('canvas')

let ctx = canvas.getContext('2d')

window.addEventListener("load", () =>{
 
})

const drawing = e => {
 ctx.lineTo(e.offsetX, e.offsetY)
 ctx.stroke()
}

canvas.addEventListener('mouseover', drawing)