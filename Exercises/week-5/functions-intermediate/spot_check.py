def get_power_of(x):
    def inner(y):
        return y**x

    return inner


calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))  # 5^2 = 25
print(calc_power_of_2(7))  # 7^2 = 49
print(calc_power_of_4(2))  # 2^4 = 16
print(calc_power_of_4(3))  # 3^4 = 81


global_var = 5


def foo():
    local_var = 8


g = "I am global"


def func():
    global g
    g = "overrideing global"
    print("func: ", g)


func()
print("outside: ", g)


global_var = 10


def outer_func():
    local_var = 11

    def inner_func():
        global global_var
        global_var = 21
        print("inner_func global_var = ", global_var)

    inner_func()
    print("outer_func global_var = ", global_var)


outer_func()
print("outside global_var = ", global_var)
