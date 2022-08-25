# VALID PARENTHESES
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        bracket_hash = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for c in s:
            # make sure you are at a closing character
            if c in bracket_hash:
                # check that stack length > 0 and that top of stack is the correlating open bracket
                if stack and bracket_hash[c] == stack[-1]:
                    stack.pop()
                else:
                    return False
            # otherwise, you are at an opening character -> add it to the stack
            else:
                stack.append(c)

        if len(stack) == 0:
            return True
        else:
            return False
