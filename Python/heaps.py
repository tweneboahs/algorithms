# IMPLEMENT A MAX HEAP
class MaxHeap:
    def __init__(self, capacity):
        self.collection = [0] * capacity
        self.size = 0
        self.capacity = capacity

    def print_heap(self):
        print(self.collection)

    def get_parent_index(self, index):
        return (index - 1)//2

    def get_left_child_index(self, index):
        return (2 * index) + 1

    def get_right_child_index(self, index):
        return (2 * index) + 2

    def has_parent(self, index):
        return self.get_parent_index(index) >= 0

    def has_left_child(self, index):
        return self.get_left_child_index(index) < self.size

    def has_right_child(self, index):
        return self.get_right_child_index(index) < self.size

    def parent(self, index):
        return self.collection[self.get_parent_index(index)]

    def left_child(self, index):
        return self.collection[self.get_left_child_index(index)]

    def right_child(self, index):
        return self.collection[self.get_right_child_index(index)]

    def is_full(self):
        return self.size == self.capacity

    def swap(self, index1, index2):
        temp = self.collection[index1]
        self.collection[index1] = self.collection[index2]
        self.collection[index2] = temp

    def insert(self, value):
        if self.is_full():
            raise ("this heap is full")
        self.size += 1
        self.collection[self.size - 1] = value
        self.heapify_up()

    def heapify_up(self):
        ind = self.size - 1
        while self.has_parent(ind) and self.parent(ind) < self.collection[ind]:
            self.swap(ind, self.get_parent_index(ind))
            ind = self.get_parent_index(ind)

    def remove_node(self):
        if self.size == 0:
            raise ("this heap is empty")
        self.size -= 1
        data = self.collection[0]
        self.collection[0] = self.collection[self.size]
        self.collection[self.size] = 0
        self.heapify_down()
        return data

    def heapify_down(self):
        ind = 0
        while self.has_left_child:
            largest_child_index = self.get_left_child_index(ind)
            if self.has_right_child(ind) and self.right_child(ind) > self.left_child(ind):
                largest_child_index = self.get_right_child_index(ind)
            if self.collection[ind] < self.collection[largest_child_index]:
                self.swap(ind, largest_child_index)
            else:
                break
            ind = largest_child_index


my_heap = MaxHeap(4)
my_heap.insert(9)
my_heap.insert(100)
my_heap.insert(200)
my_heap.insert(400)
my_heap.print_heap()
print(my_heap.remove_node())
my_heap.print_heap()

# ________________________________________________________________
