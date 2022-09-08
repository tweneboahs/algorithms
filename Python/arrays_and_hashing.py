# PRODUCT OF ARRAY EXCEPT ITSELF
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = []
        postfix = []
        prefix_product = 1
        postfix_product = 1
        results = []

        for num in nums:
            prefix_product *= num
            prefix.append(prefix_product)

        for num in reversed(nums):
            postfix_product *= num
            postfix.insert(0, postfix_product)

        for index, num in enumerate(nums):
            pre_index = index - 1
            post_index = index + 1
            if pre_index < 0:
                results.append(1 * postfix[post_index])
            elif post_index > len(nums) - 1:
                results.append(prefix[pre_index] * 1)
            else:
                results.append(prefix[pre_index] * postfix[post_index])

        return results
# ________________________________________________________________

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
# SUM OF UNIQUE ELEMENTS


class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        sum = 0
        count = {}

        for num in nums:
            if num not in count:
                count[num] = 0
            count[num] += 1

        for num in count:
            if count[num] == 1:
                sum += num

        return sum
# ________________________________________________________________

# ________________________________________________________________

# ________________________________________________________________

# ________________________________________________________________
