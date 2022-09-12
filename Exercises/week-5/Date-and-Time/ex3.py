import datetime


def showCurrentYearAndDay():
    print(datetime.datetime.today().strftime(" Current year is: %Y"))
    print(datetime.datetime.today().strftime(" Current year is: %d"))


showCurrentYearAndDay()
