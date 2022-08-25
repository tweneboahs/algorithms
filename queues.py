class PQ:
    def __init__(self):
        self.collection = [[2, 7]]

    def dequeue(self):
        return self.collection.pop()

    def peak(self):
        print(self.collection[len(self.collection) - 1])

    def is_empty(self):
        return (self.collection == 0)

    def enqueue(self, item):
        priority, num = item
        if len(self.collection) == 0:
            self.collection.append([priority, num])
        else:
            for index, element in enumerate(self.collection):
                element_added = False
                coll_prior, coll_num = element
                if coll_prior > priority:
                    self.collection.insert(index, [priority, num])
                    element_added = True
                    break
            if element_added == False:
                self.collection.append([priority, num])


priority_queue = PQ()
print(priority_queue.collection)
priority_queue.peak()
print(priority_queue.is_empty())
print(priority_queue.dequeue())
priority_queue.enqueue([6, 3])
priority_queue.enqueue([8, 3])
priority_queue.enqueue([2, 3])
priority_queue.enqueue([10, 3])
print(priority_queue.collection)
