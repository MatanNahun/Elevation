import warnings

# def recur_fibo(n):
#   warnings.warn("Soon will be removed from this module \ and moved to math package", DeprecationWarning)
#   if n <= 1:
#     return n
#   else:
#     return(recur_fibo(n-1) + recur_fibo(n-2))

# recur_fibo(10)

warnings.warn("This is ignored", ImportWarning)


# import warnings
# warnings.filterwarnings("always",r".*NO MORE", ImportWarning)
# warnings.warn("This is ignored NO MORE", ImportWarning) 

# raise ValueError("It is a common hobby to terminate Python programs!") 



# try:
#   raise ValueError("It is a common hobby to terminate Python programs!")
# except ValueError:
#   print("Caught you!") 
# print("Caught you!") 



# try:
#   raise ValueError("It is a common hobby to terminate Python programs!")
# except Exception as exp:
#   print("Caught any type of exception object: ", exp.args) 


# while True:
#   try:
#     y = int(input('Please enter a number\n'))
    
#   except ( ValueError) as e:
#     print(f'Error is {e}') 


# try:
#   int(input("Please enter a number, and nothing but a number: "))
# except Exception:
#   print("Something is wrong, cannot tell exactly what...")
# except ValueError:
#   print("Bad choice, I said only numbers!") 


# class DogAteHomework(Exception):
#   """Kids use it all the time, but it happens!"""
#   pass

# class NothingExceptionalHappend(Exception):
#   """Just a normal afternoon"""
#   pass
    
