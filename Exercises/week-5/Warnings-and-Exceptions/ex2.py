
def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError as exp:
        print("Caught IndexError exception: ", exp.args) 


mylist = ["apple", "banana", "cherry"]

get_list_element(mylist,4)