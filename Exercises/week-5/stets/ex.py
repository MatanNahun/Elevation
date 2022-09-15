s = {3, 6, "bibi", ("Simon", "Garfunkel")}
s.add(5)
print(s)

s.update([11, 22], (55,), ("mimi",))
print(s)

fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)


set_ = {1, 2}
frozenset_ = frozenset((1, 3, 4))


dictionary = {}
dictionary[frozenset_] = 1  # valid
print(dictionary)
