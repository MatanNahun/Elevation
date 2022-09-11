# print(ord('C')) # 67

# print(ord("4"))

# def print_unicode_table():
#       for i in range(200, 1000 + 1):
#         print(f"{i}: {chr(i)}")

# print_unicode_table()


# print("This is a new\n dawn")


byte_string = b"ABC"
for x in byte_string:
    print(x)


print("ABC".encode("ascii"))
print("ABC".encode("utf-8"))
x = 9 + 5
