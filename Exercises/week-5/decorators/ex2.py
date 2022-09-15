from functools import wraps


def func_info(some_func):
    @wraps(some_func)
    def inner(*args, **kwargs):
        print("func name: " + some_func.__name__)
        print("args: " + str(tuple(args)))
        print("kwargs: " + str(kwargs))
        res = some_func(*args, **kwargs)
        print("return value: " + str(res))
        print("return type: " + str(type(res)))
        return res

    return inner


@func_info
def add(num1, num2, age, text):
    return num1 + num2


add(1, 2, age=3, text="hello")
