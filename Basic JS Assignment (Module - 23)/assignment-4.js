// Problem number - 1 (Radian to Degree)

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Error!! Please Enter a Number';
    } else {
        const degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
}

//  Problem number - 2 (isJavaScriptFile)

function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Beware, Please Enter a string!';
    }
    else {
        if (fileName.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }
}


// // Problem number - 3 (oilPrice)

function oilPrice(diesel, patrol, octane) {
    const dieselLitre = 114;
    const patrolLitre = 130;
    const octaneLitre = 135;

    const dieselNeed = diesel * dieselLitre;
    const patrolNeed = patrol * patrolLitre;
    const octaneNeed = octane * octaneLitre;

    const totalMoneySpent = dieselNeed + patrolNeed + octaneNeed;
    return totalMoneySpent;
}



// Problem number - 4 (publicBusFare)
function publicBusFare(public) {
    const reservedBusSeats = 50;
    const microBusSeats = 11;
    const publicBusFare = 250;
    if (typeof public === "number") {
        if (public < 50) {
            const divisible = parseInt(public / microBusSeats);
            const publicLeft = public - microBusSeats * divisible;
            const busFare = publicBusFare * publicLeft;
            return busFare;
        } else {
            const divisibleByReservedBus = parseInt(public / reservedBusSeats);
            let publicLeft = public - reservedBusSeats * divisibleByReservedBus;
            const divisibleByMicroBus = parseInt(publicLeft / microBusSeats);
            publicLeft -= microBusSeats * divisibleByMicroBus;
            const busFare = publicBusFare * publicLeft;
            return busFare;
        }
    } else {
        return "Attention! This is not a number";
    }
}

// Problem number - 5 (isBestFriend)

function isBestFriend(bef1, bef2) {
    if (typeof bef1 !== 'object' && typeof bef2 !== 'object') {
        return 'Error!! Please Enter a Object. Not sentence or number';
    }
    else {
        if (bef1.name === bef2.friend && bef1.friend === bef2.name) {
            return true;
        }
        else {
            return false;
        }
    }
}