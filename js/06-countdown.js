/*Write an application that counts down to 0 based on the number that a user passes into a prompt. 
If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. */

//VARIABLES
let countNum = parseInt(prompt("Please enter the number you want to start: "))

console.log("COUNTING DOWN .....")
while (countNum >= 0)
{
    console.log(`${countNum}`)
    countNum--;
}

