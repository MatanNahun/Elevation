# ex1:


from ast import arg
from itertools import count


def reduce(function, iterable, initial=None):
    if type(initial) == float:
        return function(iterable, initial)
    else:
        return function(iterable)


def multiplyList(myList, initial=1):
    # Multiply elements one by one
    result = 1
    for x in myList:
        result = result * x
    return result * initial


list = [1, 2, 3, 4, 5]
print(reduce(sum, list))
print(reduce(multiplyList, list, 1))


# ============================================

# ex2:


def max_arguments():
    maximum_number_of_arguments_that_called = 0

    def inner(*args):
        nonlocal maximum_number_of_arguments_that_called
        maximum_number_of_arguments_that_called = max(
            len(args), maximum_number_of_arguments_that_called
        )
        return maximum_number_of_arguments_that_called

    return inner


func = max_arguments()
print(func())  # 0
print(func(1, 2, 3, 7))  # 4
print(func(9, 2))  # 4
print(func(1, 2, 3, 4, 5))  # 5

# ================================================================

# ex increase:


def increment_function(key, increse=1):
    def inner(object):
        nonlocal key
        if object.get(key) != None:
            nonlocal increse
            object[key] += increse
        else:
            print("there is no such key")
        return object

    return inner


employee = {"name": "Momo", "age": 56, "salary": 10000}

# func = increment_function("age")
# print(func(employee))

# func = increment_function("salary", 1000)
# print(func(employee))
increase_age = increment_function("age")
increase_salary = increment_function("salary", 1000)
counter = 0
for i in range(employee["age"], 70):
    counter += 1
    increase_age(employee)
    if counter % 2 == 0:
        increase_salary(employee)
    print(employee)
