function trap(height: number[]): number {
    /*
    the trick to this problem is that we start off at opposite ends. Arbitrarily move the left if the left and right equal. otherwise move the end that is lesser of the two. 
    The rain water calculated based on the ends. As long as the R is larger than the L, all things left of the L can be calculated. Similiarly, as long as the L is larger than the R, all things right of the R can be calculated. 
    */

    let maxLeft = 0;
    let maxRight = 0;
    let l = 0;
    let r = height.length - 1;
    let rainWater = 0;

    while (l <= r) {
        console.log({
            l, r, maxLeft, maxRight, rainWater
        })
        if (height[l] <= height[r]) {
            rainWater = rainWater + Math.max(0, maxLeft - height[l]);
            maxLeft = Math.max(maxLeft, height[l]);
            l++;
        } else {
            rainWater = rainWater + Math.max(0, maxRight - height[r]);
            maxRight = Math.max(maxRight, height[r]);
            r--;
        }

    }
    return rainWater
};