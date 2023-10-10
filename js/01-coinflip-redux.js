//VARIABLE
let coinFlip
let flip 

//USER INPUT 
numberOfFlip = parseInt(prompt(`Please enter the number of coin flips: `))

//FOR LOOP 
for (flip = 0; flip < numberOfFlip; flip++){

    let randomNum = Math.round(Math.random())

    if (randomNum === 0){console.log(`Heads`)}

    else if (randomNum === 1) {console.log(`Tails`)}

}

console.log(`Loop is terminated.`)
