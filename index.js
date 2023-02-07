const zTetromino = "secondShape"
const oTetromino = "thirdShape"
const iTetromino = "fourthShape"
const tTetromino = "fifthShape"


const tetrominoes =[lTetromino,zTetromino,oTetromino,tTetromino]

console.log(tetrominoes[5])

document.addEventListener('DOMContentLoaded',(()=>{
const grid = document.querySelector('.grid')
let squares = Array.from(document.querySelectorAll(".grid div"))
let ScoreDisplay =document.querySelector("#score")
let StartBtn = document.querySelector("#start-button")
const width =10
console.log(squares)

}))



const lTetromino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
]







