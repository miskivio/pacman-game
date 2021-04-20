import { LEVEL, OBJECT_TYPE} from './setup'

// dom
const gameGreed = document.querySelector('#game')
const scoreTable = document.querySelector('#score')
const startButton = document.querySelector('#start-button')

// game constants

// ms
const POWER_PILL_TIME = 10000 

const GLOBAL_SPEED = 80

// init setup

let score = 0
let timer = null
let gameWin = false

let powerPillActive = false
let powerPillTimer = null

const gameOver = (pacman, grid) => {

}

const checkCollision = (pacman, ghosts) => {

}

const startGame = () => {
    
}



