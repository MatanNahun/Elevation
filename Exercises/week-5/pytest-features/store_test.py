import pytest


def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount))


store_ = store()


def buy_banana(store):
    store["banana"] += 1


def buy_two_bananas(store):
    buy_banana(store)
    buy_banana(store)


def test_buy_banana():
    store_test = store()
    old_num_of_bananas = store_test["banana"]
    buy_banana(store_test)
    assert store_test["banana"] == old_num_of_bananas + 1, "Got error in your bananas!"


def test_buy_two_bananas():
    store_test = store()
    old_num_of_bananas = store_test["banana"]
    buy_two_bananas(store_test)
    assert store_test["banana"] == old_num_of_bananas + 2, "Got error in your bananas!"


# print(store_)
# buy_banana()
# print(store_)
