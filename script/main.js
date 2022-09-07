import { createGame } from "./game.js"

const dinoElement = document.querySelector('#dino')
const cactuElement = document.querySelector('#cactu')
const scoreElement = document.querySelector('#score')

createGame(dinoElement,cactuElement,scoreElement);