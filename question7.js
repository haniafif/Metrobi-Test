function getMaxValue(carrotTypes, capacity){
    // sort by price/kg ( which one is more expensive )
    const carrotTypesSortedByPricePerKg = carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));
    let maxValue = 0;
    carrotTypesSortedByPricePerKg.forEach((carrotType)=>{
        //check if the ammount that i can take is less than capicity, else just take what the capacity can
        const amountToTake = Math.min(carrotType.kg, capacity); 
        maxValue += amountToTake*carrotType.price;
        capacity -= amountToTake;
    })
    return maxValue;
}
const carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}];
capacity = 36 //kg

console.log(getMaxValue(carrotTypes,capacity))