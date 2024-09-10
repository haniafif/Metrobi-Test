function findCriticalFloor(totalFloors) {
  let step = 1;
  let totalSteps = 0;

  while (totalSteps < totalFloors) {
    totalSteps += step;
    step++;
  }

  let floorToDrop = step - 1;

  while (floorToDrop > 0) {
    for (let i = floorToDrop; i <= totalFloors; i += floorToDrop) {
      console.log(`Dropping egg from floor ${i}`);

      const isBreak = i > criticalFloor;

      if (isBreak) {
        console.log(`Egg breaks at floor ${i}`);
        for (let j = i - floorToDrop + 1; j < i; j++) {
          console.log(`Dropping second egg from floor ${j}`);
          if (j === criticalFloor) {
            console.log(`Found the critical floor: ${j}`);
            return j;
          }
        }
        return null;
      }
    }
    floorToDrop--;
  }

  return null;
}

const totalFloors = 100;
const criticalFloor = 63;
console.log(`Critical floor is: ${findCriticalFloor(totalFloors)}`);
