// Code your solutions in this file

function writeCards(names, event){
    const newArr = [];
    for(let i = 0; i < names.length; i++) {

    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
     }
    return newArr
}


function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
}




