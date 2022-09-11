fridge = {
    "milk" : 2,
    "banans": 4,
    "juice": 2
}

outputMilk = "There is one bottle of milk left" if fridge["milk"] == 1 else "There are " + str(fridge["milk"]) + " bottles of milk left"

print(outputMilk)