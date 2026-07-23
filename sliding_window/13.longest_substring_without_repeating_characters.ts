function lengthOfLongestSubstring(s: string): number {
    let contender = ''; //if the substring is found cut off the string up until the point of where this was found
    let longest = ''; //each iteration compares contender vs longest. The longer of the two becomes the new longest
    for (let i = 0; i < s.length; i++) {

        if (contender.includes(s[i])) {
            const index = contender.indexOf(s[i])
            contender = `${contender.slice(index+1)}${s[i]}`
        } else {
            contender += s[i]
        }

        if (contender.length > longest.length) {
            longest = contender
        }
    }

    return longest.length;
};

/*
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/