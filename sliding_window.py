# BEST TIME TO BUY AND SELL STOCK

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i = 0
        j = 1
        max_diff = 0

        while j < len(prices):
            curr_diff = prices[j] - prices[i]
            if curr_diff > max_diff:
                max_diff = curr_diff
            if prices[i] > prices[j]:
                i = j
                j = i + 1
            else:
                j += 1

        return max_diff

# ___________________________________________________________________
# LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        else:
            longest_length = 1

        i = 0
        j = 1

        while j < len(s):
            if s[j] in s[i:j]:
                i += 1
            else:
                curr_length = j - i + 1
                if curr_length > longest_length:
                    longest_length = curr_length
                j += 1
            if i == j:
                j += 1

        return longest_length


# ___________________________________________________________________


# ___________________________________________________________________


# ___________________________________________________________________


# ___________________________________________________________________
