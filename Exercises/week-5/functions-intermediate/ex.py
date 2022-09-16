def add_numbers(a, c, b=5):
    return a + b + c


print(add_numbers(1, 2, 3))
print(add_numbers(1, 2))


def add_to_list(value, nums=None):
    nums = nums or []
    nums.append(value)
    return nums


print(add_to_list(1))
print(add_to_list(2))


def more_is_better(*args):
    print(args)


more_is_better(1, 2, 3, 4)


def print_suitcase(**suitcase):
    print(suitcase.items())


print_suitcase(shirts=3)
print_suitcase(shirts=4, shoes=2, watermelon=16)


# def print_bag(bananas=0, apples=0):
#     print("bananas", bananas)
#     print("apples", apples)
#     print_bag(2, 3)


# fruits = {"apples": 4, "bananas": 5}
# print_bag(**fruits)


def print_suitcase(**suitcase):
    for item, ammount in suitcase.items():
        print(item, ammount)


items = {"shirts": 2, "shoes": 8, "watermelon": 100}

print_suitcase(**items)


def all_arguments(num, *args, **kwargs):
    print("regular argument", num)
    print("args", args)
    print("kwargs", kwargs)


all_arguments(3, "arg1", "arg2", arg3=3, arg4=[1, 2])


def go_right(x, y):
    return x + 1, y


x, y = go_right(2, 2)


def hello(name="Margo"):
    """this is a greeting function"""
    print(f"Hello {name.capitalize()}!")


print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__)


def get_print():
    def my_print(msg):
        print(msg)

    return my_print


get_print()("hello")


def generate_add(x):
    def inner(y):
        return x + y

    return inner


add_1 = generate_add(1)
add_2 = generate_add(2)
print(add_1(5))  # 6
print(add_2(5))  # 7
