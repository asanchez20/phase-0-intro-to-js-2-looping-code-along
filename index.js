
names = [];
eventName = "";

function writeCards(names, eventName){
    for(let i = 0; i < names.length; i++){
    console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
}

let number = 10;
function countDown(number){
while (countDown < 10) {
    console.log(countDown--)
}
}
countDown(10)