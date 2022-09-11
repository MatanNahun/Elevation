def string_number_to_int(stringNum):
    res = 0
    for i in stringNum:
        if ord(i) > 47 and ord(i) < 58:
            res = (res * 10) + (ord(i) - 48)
        else:
            return
    return res


print(string_number_to_int("10"))  # output: 10
print(string_number_to_int("123"))  # output: 123
print(string_number_to_int("99"))  # output: 99
print(string_number_to_int("ABC"))
