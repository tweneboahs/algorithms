# Search in Rotated Sorted Array

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = 0
        j = len(nums) - 1

        while i <= j:
            mid = (i + j)//2
            # if the middle index holds the target value, return it
            if nums[mid] == target:
                return mid
            # are we in the left sorted portion of arr?
            if nums[i] <= nums[mid]:
                if target > nums[mid] or target < nums[i]:
                    i = mid + 1
                else:
                    j = mid - 1
            # otherwise, we are in the right sorted portion of array
            else:
                if target < nums[mid] or target > nums[j]:
                    j = mid - 1
                else:
                    i = mid + 1

        return -1

# ___________________________________________________________________________________
# Find Minimum in Rotated Sorted Array


class Solution:
    def findMin(self, nums: List[int]) -> int:
        i = 0
        j = len(nums) - 1
        # initialize min at a value within array arbitrarily
        min_val = nums[0]

        while i <= j:
            # if we ever get to a completely sorted graph -> return leftmost value
            if nums[i] < nums[j]:
                min_val = min(min_val, nums[i])
                # and break out of the while loop bc there is nothing further to check
                break

            # if array is not sorted we will need to do a binary search
            mid = (i + j) // 2
            min_val = min(min_val, nums[mid])

            # will we search to the left or to the right?
            # left side
            if nums[mid] >= nums[i]:
                # we want to search the right sorted portion
                i = mid + 1
            # right side
            else:
                j = mid - 1

        return min_val

# ___________________________________________________________________________________


# ___________________________________________________________________________________


# ___________________________________________________________________________________


# ___________________________________________________________________________________


# ___________________________________________________________________________________


# ___________________________________________________________________________________
