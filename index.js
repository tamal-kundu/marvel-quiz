let readlineSync = require('readline-sync')

let highScores = [
  {name: "Rahul",score: 9,},{name: "Rohit",score: 8,}]

const queBook = [
	{
		Question: `
  How many Infinity Stones are there?
	a: 4    c: 3
	b: 6    d: 1\n >> `,
		answer: "b"
	},
	{
		Question: `
  What is the name of Thor’s hammer?
	a: Vanir    c: Mjolnir
	b: Aesir    d: Norn\n >> `,
		answer: "c"
	},
	{
		Question: `
  What is Captain America’s shield made of?
	a: Carbonadium   c: Vibranium
	b: Promethium    d: Adamantium\n >> `,
		answer: "c"
	},
	{
		Question: `
  Who is killed by Loki in the Avengers?
	a: Maria Hill    c: Agent Coulson
	b: Nick Fury     d: Doctor Erik Selvig\n >> `,
		answer: "c"
	},
  {  
    Question: `
  The Flerkens are a race of extremely dangerous aliens that resembles what?
	a: Cats     c:Reptiles
	b: Ducks    d: Racoons\n >> `,
		answer: "a"
  },
  {  
    Question: `
  What type of doctor is Stephen Strange?
	a: Neurosurgeon            c: Trauma Surgeon
	b: Cardiothoracic Surgeon  d: Plastic Surgeon\n >> `,
		answer: "a"
  },
  {  
    Question: `
  Black Panther is set in which fictional country?
	a: Uganda   c: Wakanda
	b: Niger    d: Ghana\n >> `,
		answer: "c"
  },
  {  
    Question: `
  Who is the Winter Soldier?
	a: Captain    c: Tony Stark
	b: Bucky      d: Falcon\n >> `,
		answer: "b"
  },
  {  
    Question: `
  Who does the Mad Titan sacrifice to acquire the Soul Stone?
	a: Nebula       c: Cull Obsidian
	b: Ebony Maw    d: Gamora\n >> `,
		answer: "d"
  },
  {  
    Question: `
  What is the real name of the Black Panther?
	a: T’Challa       c: The Kree
	b: The Skrulls    d: The Flerkens\n >> `,
		answer: "a"
  }
]
console.log("Welcome to Tamal's quiz on MARVEL\n")


let questionIndex=0
let score=0


function play(){
    let userAnswer=readlineSync.question(queBook[questionIndex].Question)
		console.log(`You answered: ${userAnswer}`)
		if (userAnswer.toLowerCase() == queBook[questionIndex].answer.toLowerCase()) {
			console.log("Yay,right answer! \n")
      score++
      scorenIndex()
			startEnd()
		} else {
			console.log("Oops,wrong answer!\n")
      scorenIndex()
      startEnd()
    }
}
      

function startEnd(){
  if(isQuestionBookFinished()){
    console.log(`Hurray!you finished the quiz.`)
    highScore()
  }else{
    let userAnswer=readlineSync.question(` Press e to exit, or press any other key to continue the quiz!\n : `)
    if (userAnswer.toLowerCase() !== "e") {
				play();
			} else {
				highScore()
    }
  }
}


function scorenIndex(){
   questionIndex++
   console.log("current score: ", score)
   console.log("-------------")
}


function highScore(){
  	console.log(`Thanks for playing....`)
    console.log(`Your best score is ${score}\n`)
    console.log("Check out the high scores!\nIf you have beat the high score send me a screenshot and I'll update it..")
    highScores.map(score => console.log(`${score.name} : ${score.score}`))
}


function isQuestionBookFinished() {
	if (queBook.length == questionIndex) {
		return true
	}
}


startEnd()
