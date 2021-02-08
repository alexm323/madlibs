function addCommas(num) {
    let isNegative = false;
    if (num < 0){
        isNegative = true;
        num = num*-1
    }

    let numArr = num.toString().split('')

    // if there is less than 4 digits then we dont need to comma so we just return the num as a string
    if (numArr.length < 4 && !isNegative){
        return numArr.join('')
    }
    if (numArr.length < 4 && isNegative){
        numArr.unshift('-')
        return numArr.join('')
    }

    // we can see how many commas we need by measuring the length of the array and dividing by 3 and making it an integer, we need this number before we add in any commas
    // subtracting one because we will add in one comma automatically at this point
    let commasNeeded = parseInt((numArr.length/3)) - 1;
    // if we get to this point then we know that there is more than 4 digits so we can add a comma in automatically 
    numArr.splice((numArr.length-3),0,',')
    // we want to cycle through and add in the right number of commas so we can find the index of the soonest comma and go back 3 to add a comma at that index
    for (let i = 0; i < commasNeeded; i++) {
        let addCommaIndex = numArr.indexOf(',') - 3;
        numArr.splice(addCommaIndex,0,',')
        
    }
    // want to check that we didnt put a comma right at the beginning
    if(numArr[0]===','){
        // if we did then we just shift it so we dont have to worry about it
        numArr.shift()
    }
    // if the number was originally negative we can add that back in with unshift before we join the string back together
    if(isNegative){
        numArr.unshift('-')
        return numArr.join('')
    } 
    // we should be all good so we can return this string 
    return numArr.join('');
}

module.exports = addCommas;