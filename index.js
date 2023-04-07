// Code your solution in this file!
const distanceFromHqInBlocks = (block) => {
    let hQ= 42;
    if (block - hQ >=0) {
        return block - hQ;
    } else {
        return hQ - block;
    }
}

const distanceFromHqInFeet = (block) => {
    let blockDistance = 264;
    return distanceFromHqInBlocks(block) * blockDistance;
}

const distanceTravelledInFeet = (blockA, blockB) => {
    let blockDistance = 264;
    if (blockB - blockA >= 0) {
        return (blockB - blockA)*blockDistance;
    } else {
        return (blockA - blockB)*blockDistance;
    }
}

const calculatesFarePrice = (start, distance) => {
    if (distanceTravelledInFeet(start, distance) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, distance) > 400 && distanceTravelledInFeet(start, distance) <= 2000) {
        return (distanceTravelledInFeet(start, distance)-400)*0.02;
    } else if (distanceTravelledInFeet(start, distance) > 2000 && distanceTravelledInFeet(start, distance) <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}