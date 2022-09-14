my_list = ["I", 2, "Love", 4, 56, "Coding", "Python", "in", [8, 9, 10]]


def test_number():
    assert (
        3 in my_list
    ) == False, "3 is not on my_list"  # Should assert if number 3 is in my_list

    assert (
        56 in my_list
    ) == True, (
        "56 is on my_list"  #   assert … # Should assert if number 56 is in my_list
    )


def test_str():
    assert (
        ("Love" in my_list) and ("Love" in my_list) and ("Coding" in my_list)
    ) == True, "I, Love and Coding are in my_list"  # Should assert if "I", "Love" and "Coding" are in my_list


strings_my_list = [string for string in my_list if isinstance(string, str)]
string_results = [s[0].isupper() for s in strings_my_list]


def test_upper_str():
    assert (
        all(string_results)
    ) == False, "no"  # Should assert if all the strings in my_list are in upper case﻿


def test_negative():
    assert (
        6 in my_list
    ) == False, "6 is not on my_list"  # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
