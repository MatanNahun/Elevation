from time import sleep


def cache_decorator(some_func):
    def inner(*args, **kwargs):
        if inner.cash.get(args[0]):
            res = inner.cash.get(args[0])
        else:
            res = some_func(*args, **kwargs)
            inner.cash[args[0]] = res
            sleep(4)
        return res

    inner.cash = {}
    return inner


@cache_decorator
def fibonacci(num):
    if num in {0, 1}:  # Base case
        return num
    return fibonacci(num - 1) + fibonacci(num - 2)  # Recursive case


print(fibonacci(2))
print(fibonacci(4))
print(fibonacci(2))
