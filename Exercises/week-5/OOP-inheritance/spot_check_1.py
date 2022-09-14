class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        product = self.width * self.height
        return product

    def calculate_perimeter(self):
        perimeter = (2 * self.height) + (2 * self.width)
        return perimeter


class Square(Rectangle):
    def __init__(self, length):
        super().__init__(length, length)

    def calculate_perimeter(self):
        perimeter = self.width * 4
        return perimeter


s = Square(2)
print(s.calculate_perimeter())  # outputs: 8
print(s.calculate_area())  # outputs: 4
