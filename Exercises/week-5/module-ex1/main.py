import calendar
import datetime


print(calendar.isleap(2010))
print(calendar.isleap(2020))

counter = 0
for i in range(2020, 2081):
    if calendar.isleap(i):
        counter += 1

print(counter)

date = "14/4/28"

print(calendar.day_name[(datetime.date(2028, 4, 14)).weekday()])
