const named = []
const eventName = ""
function writeCards(name,eventName){
    for(let i = 0; i < name.length; i++){
        named.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return named
}
let number = ""
function countDown (number){
while (number >= 0){
    console.log(number--)
}
}

countDown(5)