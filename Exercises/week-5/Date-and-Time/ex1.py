import datetime


def showCurrentTime():
    print(datetime.datetime.today().strftime("%Y/%m/%d/%H.%M.%S.%f"))


showCurrentTime()
