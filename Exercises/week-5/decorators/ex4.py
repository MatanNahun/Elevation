def count_number_of_calls(some_func):
    def inner(*args, **kwargs):
        res = some_func(*args, **kwargs)
        inner.counter += 1
        print(inner.counter)
        return res

    inner.counter = 0
    return inner


@count_number_of_calls
def say_hi():
    print("hi")


say_hi()
say_hi()
say_hi()
say_hi()
say_hi()
