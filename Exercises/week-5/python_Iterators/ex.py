# numbers = [11, 3, 64, 17, 94]


# def find_index(items, item):
#     for index, value in enumerate(items):
#         if value == item:
#             return index
#         return -1


# numbers = [11, 3, 64, 17, 94]
# for i, v in enumerate(numbers, 100):
#     print(i, v)


# def my_gen():
#     n = 1
#     print("This is printed in the first call")
#     yield n
#     n += 1
#     print("This is printed second")
#     yield n
#     n += 1
#     print("This is printed at last")
#     yield n


# iter_gen = my_gen()

# next(iter_gen)
# next(iter_gen)
# next(iter_gen)
# # next(iter_gen)

# ======================================
# ex1:


def my_enumerate(list, number=0):
    for i in range(len(list)):
        yield number + i, list[i]


for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem)


for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)

# =============================================

# ex2:


def my_accumulate(list):
    sum = 0
    for i in range(len(list)):
        sum += list[i]
        yield sum


for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)

# =============================
import math


def get_prime_factors_generator(num):
    while num % 2 == 0:
        yield 2
        num = num / 2

    for i in range(3, int(math.sqrt(num)) + 1, 2):
        while num % i == 0:
            yield i
            num = num / i
    if num > 2:
        yield num


for x in get_prime_factors_generator(100):
    print(x)


# =======================================


class CircleIter:
    def __init__(self, iter, number):
        self.iter = iter
        self.number = number
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        result = self.iter[self.index]
        self.index += 1
        self.index = self.index % len(self.iter)

        self.number -= 1
        if self.number == -1:
            raise StopIteration
        return result


# for x in CircleIter([1, 2], 5):
#     print(x, end=" ")

for x in CircleIter([1, 2, 3], 4):
    print(x, end=" ")
    for y in CircleIter([5, 6], 3):
        print(y, end=f" ")
print()
