# LINKED LIST VALUES

# iterative
def linked_list_values(head):
    current = head
    values = []
    while current != None:
        values.append(current.val)
        current = current.next

    return values

# recursive


def linked_list_values(head):
    values = []
    fill_values(head, values)
    return values


# ______________________________________________
# SUM LIST

# iterative
def sum_list(head):
    total = 0
    current = head

    while current is not None:
        total += current.val
        current = current.next

    return total

# recursive


def sum_list(head):
    if head == None:
        return 0

    return head.val + sum_list(head.next)

# ______________________________________________

# LINKED LIST FIND

# iterative


def linked_list_find(head, target):
    current = head
    while current != None:
        if current.val == target:
            return True
        current = current.next

    return False

# recursive


def linked_list_find(head, target):
    if head == None:
        return False

    if head.val == target:
        return True

    return linked_list_find(head.next, target)

# ______________________________________________

# REVERSE LIST


# iterative
def reverse_list(head):
    current = head
    prev = None

    while current != None:
        next = current.next
        current.next = prev
        prev = current
        current = next

    return prev

# recursive


def reverse_list(head, prev=None):
    if head == None:
        return prev
    next = head.next
    head.next = prev

    return reverse_list(next, head)

# ______________________________________________

# ZIPPER LISTS

# iterative


def zipper_lists(head_1, head_2):
    tail = head_1
    curr1 = head_1.next
    curr2 = head_2

    counter = 0
    while curr1 is not None and curr2 is not None:
        if counter % 2 == 0:
            tail.next = curr2
            curr2 = curr2.next
        else:
            tail.next = curr1
            curr1 = curr1.next
        counter += 1
        tail = tail.next
    if curr1 is None:
        tail.next = curr2
    if curr2 is None:
        tail.next = curr1
    return head_1


# recursive

def zipper_lists(head_1, head_2):
    if head_1 is None and head_2 is None:
        return None
    if head_1 is None:
        return head_2
    if head_2 is None:
        return head_1
    next_1 = head_1.next
    next_2 = head_2.next
    head_1.next = head_2
    head_2.next = zipper_lists(next_1, next_2)
    return head_1

# ______________________________________________
# REORDER LIST


class Solution:
    def reorderList(self, head: ListNode) -> None:
        # find middle
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse second half
        second = slow.next
        prev = slow.next = None
        while second:
            tmp = second.next
            second.next = prev
            prev = second
            second = tmp

        # merge two halfs
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2

# ______________________________________________
# ______________________________________________


# ______________________________________________
# ______________________________________________


# ______________________________________________
# ______________________________________________


# ______________________________________________
# ______________________________________________


# ______________________________________________
# ______________________________________________


# ______________________________________________
# ______________________________________________


# ______________________________________________
