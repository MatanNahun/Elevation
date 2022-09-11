# fridge = {
#     "milk" : 2,
#     "banans": 4,
#     "juice": 2
# }

# outputMilk = "There is one bottle of milk left" if fridge["milk"] == 1 else "There are " + str(fridge["milk"]) + " bottles of milk left"

# print(outputMilk)

# values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
# numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}


# numbers.update(values_to_add)
# print(numbers)

# closet = {
#     "shirts": {
#         "blue": 4,
#         "black": 1,
#         "white": 13,
#         "flamingo-pink": 2
#     },
#     "pants": {
#         "shorts": {
#             "purple": 1,
#             "red": 2,
#             "flamingo-pink": 3
#         },
#         "jeans": {
#             "denim": 8,
#             "organic": 1
#         }
#     },
#     "jackets": {}
# }

# print(closet["shirts"]["white"])

# student = {
#     "name": "koko",
#     "age": 42,
#     "level": "A"
# }

# del student["level"]
# print(student)

names = ["koko", "mimi", "bobo", "fifi"]

result2 = {"n"+ str(i): names[i] for i in range(len(names)) if names[i][1] == "i"}


# {'n1': 'mimi', 'n3': 'fifi'}

def get_squares_dictionary(num):
     result3 = {i: i*i for i in range(1,num+1) }
     return result3


print(get_squares_dictionary(5)) 

