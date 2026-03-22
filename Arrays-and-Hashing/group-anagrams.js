class Solution {
    
    groupAnagrams(strs) {
        const map = new Map()

        for(let str of strs){ //not "in" 
            const key = str.split("").sort().join("")

            if(! map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(str)
        }
        return Array.from(map.values())
    }
}
