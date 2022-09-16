def foo():
    x = 1

    def inner():
        print(x)  # notice this inner function using the outer function's variable

    return inner


baz = foo()  # out here, x doesn't exist
baz()  # but when we invoke baz, we're printing x!


def setCounter(step):
    counter = 0

    def count():
        nonlocal counter
        counter += step
        print(counter)

    return count


increment = setCounter(2)
increment()
increment()
