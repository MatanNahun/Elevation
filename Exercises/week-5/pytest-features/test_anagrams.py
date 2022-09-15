import pytest

# function to check if two strings are
# anagram or not
def check_anagram(s1, s2):
    if sorted(s1) == sorted(s2):
        return True
    else:
        return False


@pytest.mark.parametrize(
    "string1, string2", [("listen", "silent"), ("cat", "act"), ("a", "b")]
)
def test_check_anagram(string1, string2):
    assert check_anagram(string1, string2) == True, "Got error in your anagrams!"
