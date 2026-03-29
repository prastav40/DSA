var maxProfit = function(prices) {
    // Validation: If there's 1 or 0 days, no profit can be made
    if (!prices || prices.length < 2) {
        return 0;
    }

    let minPrice = Infinity; 
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < 0 || prices[i] > 10**4) return 0;

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,9,4,12]))