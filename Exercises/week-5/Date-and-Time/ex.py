import time
import datetime

print(time.time())
# Output: 1583755084.906643
print(time.ctime())
# Output: Mon Mar  9 13:58:04 2010


# print(1)
# time.sleep(5)
# print(2)


print(datetime.datetime.today())
# Output: 2020-01-12 10:40:38.367704
print(datetime.datetime.now())
# Output: 2020-01-12 10:40:38.367743

print(datetime.datetime.today().strftime("%Y%m%d"))
# Output: 20200312
print(datetime.datetime.today().strftime("%m/%d/%Y"))
# Output: 03/12/2020
print(datetime.datetime.today().strftime("%Y-%m-%d-%H.%M.%S"))
# Output: 2020-03-12-10.59.53
