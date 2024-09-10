function compareArrayForDuplicates(array) {
    let seenItems = new Map();
    let duplicatesItems = [];
  
    for (let i = 0; i < array.length; i++) {
      if (seenItems.has(array[i])) {
        duplicatesItems.push({
          duplicate: {
            item: array[i],
            index: i,
          },
          duplicateWith: {
            item: array[i],
            index: seenItems.get(array[i]),
          },
        });
      } else {
        seenItems.set(array[i], i);
      }
    }
  
    return duplicatesItems;
  }

  console.log(compareArrayForDuplicates([2, 2, 2, 3, 4, 5, 6, 7, 7]));
  