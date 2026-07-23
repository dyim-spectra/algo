function characterReplacement(s: string, k: number): number {
    const count = new Map<string, number>();
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count.set(char, (count.get(char) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(char)!);

        while ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar)! - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};


/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/