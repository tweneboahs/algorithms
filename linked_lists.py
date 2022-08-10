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


# ______________________________________________
