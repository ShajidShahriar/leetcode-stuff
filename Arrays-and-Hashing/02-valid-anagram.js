class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const charCount = {}

        for(let i = 0;i<s.length;i++){
            charCount[s[i]] = (charCount[s[i]] || 0 ) + 1
            charCount[t[i]] = (charCount[t[i]] || 0 ) - 1
        }
        for(const char in charCount){
            if(charCount[char] !== 0){
                return false
            }
        }
        return true
    }
}
const mysolution = new Solution()
