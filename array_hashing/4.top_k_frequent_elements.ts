function topKFrequent(nums: number[], k: number): number[] {
    const count: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        if (count[curr]) {
            count[curr] = count[curr] + 1
        } else {
            count[curr] = 1
        }
    }

    const arr: number[][] = []
    for (let c in count) {
        if (arr[count[c]]) {
            arr[count[c]].push(Number(c))
        } else {
            arr[count[c]] = [Number(c)]
        }
    }

    const dedupedarr = [...new Set(arr)]
    const res = []
    for (let i = dedupedarr.length - 1; i >= 0; i--) {
        if (res.length >= k) return res
        if (dedupedarr[i]) {
            res.push(...dedupedarr[i])
        }
    }
    return res
};

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]

 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/