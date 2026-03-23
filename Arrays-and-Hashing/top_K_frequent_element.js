class Solution {
    
    topKFrequent(nums, k) {

        const freqMap = new Map()

        for (const num of nums){
            freqMap.set(num,(freqMap.get(num) || 0 ) + 1 )
        }

        const bucket = Array.from({length : nums.length + 1} ,() => [])
        for (const [num,freq] of freqMap){
            bucket[freq].push(num)
        }

        const result = []

        for(let i = bucket.length - 1  ; i >= 0 ; i--) {
            for(const num of bucket[i]){
                result.push(num)
                if(result.length === k){
                    return result
                }
            }
        }
    }
}

