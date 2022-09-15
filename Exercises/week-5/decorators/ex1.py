import datetime


def func_time_calculator(some_func):
    def inner(*args, **kwargs):
        print("function runtime: ", end=" ")
        old_time = datetime.datetime.now()
        res = some_func(*args, **kwargs)
        now_time = datetime.datetime.now()
        print(now_time - old_time)
        return res

    return inner


@func_time_calculator
def sum_many(number):
    sum = 0
    for i in range(0, number):
        sum += i
    return sum


@func_time_calculator
def sum_many_more(number):
    sum = 0
    for i in range(0, number):
        sum += i
    return sum


sum1 = sum_many(10000000)
sum2 = sum_many_more(50000000)
