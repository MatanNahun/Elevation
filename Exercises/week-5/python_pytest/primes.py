def is_prime(number):
    if number < 2:
        return False
    for i in range(2, number):
        if (number % i) == 0:
            return False
    return True


def are_prime_numbers(*args):
    primes = [is_prime(number) for number in args]
    return all(primes)


# print(are_prime_numbers(5, 5))
