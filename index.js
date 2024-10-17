// Function to calculate the distance in blocks from Scuber's headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42; // Scuber's headquarters is at 42nd Street
    const distanceInBlocks = Math.abs(pickupLocation - headquartersLocation);
    return distanceInBlocks; // Return the number of blocks
}

// Function to calculate the distance in feet from Scuber's headquarters
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; // Each block is 264 feet
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet; // Return the distance in feet
}

// Function to calculate the distance travelled in feet between two blocks
function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264; // Each block is 264 feet
    const distanceInFeet = blocksTravelled * feetPerBlock;
    return distanceInFeet; // Return the distance in feet
}

// Function to calculate the fare price based on the distance travelled
function calculatesFarePrice(startBlock, destinationBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const chargeableDistance = distanceInFeet - 400;
        return chargeableDistance * 0.02; // 2 cents for each foot after 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // No rides allowed over 2500 feet
    }
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); // Outputs: 8
console.log(distanceFromHqInFeet(50)); // Outputs: 2112
console.log(distanceTravelledInFeet(34, 38)); // Outputs: 1056
console.log(calculatesFarePrice(34, 38)); // Outputs: 13.12

