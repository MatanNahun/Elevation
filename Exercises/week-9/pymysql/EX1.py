from unicodedata import category
import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)

# if connection.open:
#     print("the connection is opened")


# create categories table:

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE categories(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));"
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")


# create products table:

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), category_id INT, FOREIGN KEY(category_id) REFERENCES categories(id))"
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")


# insert to categories table: =======================================================

# try:
#     with connection.cursor() as cursor:
#         query = """INSERT INTO categories (id, name) VALUES(1, "meat"); """
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = """INSERT INTO categories (id, name) VALUES(2, "dairy"); """
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")


# try:
#     with connection.cursor() as cursor:
#         query = "SELECT * FROM categories"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("DB Error")

# insert to products table: =======================================================
# try:
#     with connection.cursor() as cursor:
#         query = (
#             """INSERT INTO products (id, name, category_id) VALUES(1, "milk", 2); """
#         )
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = (
#             """INSERT INTO products (id, name, category_id) VALUES(2, "steak", 1); """
#         )
#         cursor.execute(query)
#         # we are changing the DB so we have to commit
#         connection.commit()
# except:
#     print("Error")


# ======================================================================================================================
# ex2:

# category_input = "dairy"
# try:
#     with connection.cursor() as cursor:
#         query = f'SELECT products.name FROM products, categories WHERE categories.name = "{category_input}" AND products.category_id = categories.id '
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("DB Error")

# =======================================================================================================================

# id_input = 2
# try:
#     with connection.cursor() as cursor:
#         query = f"SELECT products.name FROM products WHERE products.id = {id_input}"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("DB Error")
