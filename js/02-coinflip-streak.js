let coinFlip

do {
    let randomNum = Math.round(Math.random())

    if (randomNum === 0)
    {
        coinFlip = 'Heads'
        console.log('Heads')
    }
    else if (randomNum === 1)
    {
        coinFlip = 'Tails'
        console.log('Tails')
    }
} while (coinFlip == 'Heads');