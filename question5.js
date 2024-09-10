function findCriticalFloor(totalFloors) {
    let step = 1;
    let totalSteps = 0;
  
    // Find the initial step
    while (totalSteps < totalFloors) {
      totalSteps += step;
      step++;
    }
  
    // Step size found, now simulate the dropping process
    let floorToDrop = step - 1; // Initialize with the maximum step size
  
    while (floorToDrop > 0) {
      for (let i = floorToDrop; i <= totalFloors; i += floorToDrop) {
        console.log(`Dropping egg from floor ${i}`);
        
        // Simulate egg dropping process
        const isBreak = i > criticalFloor; // Assuming criticalFloor is the highest floor the egg can be dropped from without breaking
  
        if (isBreak) {
          console.log(`Egg breaks at floor ${i}`);
          // Use the second egg to find the exact floor
          for (let j = i - floorToDrop + 1; j < i; j++) {
            console.log(`Dropping second egg from floor ${j}`);
            if (j === criticalFloor) {
              console.log(`Found the critical floor: ${j}`);
              return j;
            }
          }
          return null; // Return null if no critical floor is found
        }
      }
      floorToDrop--; // Decrease step size
    }
    
    return null; // If no floor is found, return null
  }
  
  // Example usage
  const totalFloors = 100;
  const criticalFloor = 63; // Example critical floor, this would be determined in a real scenario
  console.log(`Critical floor is: ${findCriticalFloor(totalFloors)}`);