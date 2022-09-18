import requests

money = 1000


def get_furniture_price(name):
    res = requests.get(f"http://localhost:8000/productPrice/{name}")
    return res.json()


def buy_furniture(name):
    res = requests.get(f"http://localhost:8000/buyProduct/{name}")
    return res.json()


item_to_buy = input(" what item do you want to buy? ")
price = get_furniture_price(item_to_buy)["price"]

if money > price:
    money -= price
    inverntory = buy_furniture(item_to_buy)["inventory"]

    print(
        f"Congratulations, you've just bought {item_to_buy} for {price}. There are {inverntory} left now in the store."
    )
else:
    print("You should get a job.")
