// Code your solution in this file!
//Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
      return pickupLocation  - 42;
    } else {
      return 42 - pickupLocation;
    }
  }
 //Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  //Calculates the number of feet a passenger travels given a starting block and an ending block 
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination-start);
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25 ;
    } else {
      return 'cannot travel that far';
    }
  }
  