# TOP K FREQUENT ELEMENTS
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for num in nums:
            if num not in count:
                count[num] = 0
            count[num] += 1

        for n, c in count.items():
            freq[c].append(n)

        res = []

        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
# ________________________________________________________________

# LONGEST CONSECUTIVE SEQUENCE


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in nums:
            # check if its the start of the sequence
            if (n - 1) not in numSet:
                length = 0
                while (n + length) in numSet:
                    length += 1

                longest = max(longest, length)

        return longest

# ________________________________________________________________

# ________________________________________________________________

# ________________________________________________________________

# ________________________________________________________________

# ________________________________________________________________
