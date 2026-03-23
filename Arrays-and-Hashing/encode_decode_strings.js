class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(const str of strs){
            result += str.length + "#" + str
        }
        return result 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }
            const length = Number(str.slice(i,j))
            const string = str.slice( j + 1 ,j + 1 + length) //this feels autestic
            result.push(string)

            i = j + 1 + length 
        }
        return result 
    }
}
