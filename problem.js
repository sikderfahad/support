function oilPrice(disel, petrol, octen) {
    const diselRate = 114;
    const petrolRate = 130;
    const octenRate = 135;
    if (typeof disel == 'number' && typeof petrol == 'number' && typeof octen == 'number') {
        const diselCost = diselQuantity * diselRate;
        const petrolCost = petrolQuantity * petrolRate;
        const octenCost = octenQuantity * octenRate;
        const totalCost = diselCost + petrolCost + octenCost;
        const totalRoundCost = Math.round(totalCost);
        return totalRoundCost;
    }
    else {
        return 'Enter a valid Input';
    }
}
// Get Input
const diselQuantity = 1;
const petrolQuantity = 1;
const octenQuantity = 1;
const getTotalPrice = oilPrice(diselQuantity, petrolQuantity, octenQuantity);
console.log(getTotalPrice);