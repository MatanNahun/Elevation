import primes


def test_is_three_prime():
    assert primes.is_prime(3) == True, "oops, 3 is a prime number"


def test_five_six_seven():
    assert primes.are_prime_numbers(5, 6, 7) == False, " oops 6 is not a prime"


def test_one():
    assert primes.is_prime(0) == False, "oops, 0 is not a prime number"
