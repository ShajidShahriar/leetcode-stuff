class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const bracketMap = {
            '}' : '{' ,
            ')' : '(' ,
            ']' : '[' ,
        }

        for (let i = 0 ; i < s.length ;i++){
            let char = s[i]
            if(bracketMap[char]){
                let topElement = stack.length > 0 ? stack.pop() : '#'
                if(topElement !== bracketMap[char]){
                    return false
                }
              
            }
            else{
                stack.push(char)
            }

        }
        return stack.length === 0
    } 
    
}
