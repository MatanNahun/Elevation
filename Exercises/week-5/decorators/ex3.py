from time import sleep


def slow_down(some_func):
    def inner(*args, **kwargs):
        sleep(1)
        res = some_func(*args, **kwargs)
        return res

    return inner


@slow_down
def say_hi():
    print("hi")


say_hi()
