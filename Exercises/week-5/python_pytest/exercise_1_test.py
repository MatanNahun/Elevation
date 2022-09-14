def get_one():
    return 1


def test_get_name1():
    assert get_one() == 1, "oops, i didnt get 1"


def test_get_name2():
    assert get_one() == 2, "oops, i got a wrong number"
