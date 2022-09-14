class Artist:
    def __init__(self, name, income):
        self.name = name
        self.income = income

    def perform(self):
        print(self.name + " is performing now")


class Singer(Artist):
    def perform(self):
        print(self.name + " is singing now")


class Actor(Artist):
    def __init__(self, name, income, most_known):
        super().__init__(name, income)
        self.most_known = most_known


s = Singer("Lis", 43)
s.perform()  # outputs: Lis is performing now
a = Actor("Al", 24, "Scar")
a.perform()
print(a.most_known)  # outputs: Scar

s = Singer("Ellie", 400)
a = Actor("Jerome", 450, "Leob")
ar = Artist("Arnie", 210)
print(type(s))
print(type(a))
print(type(ar))
