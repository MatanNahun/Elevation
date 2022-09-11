# ex1:

# state = "France"

# heads_of_states = {
#     "Italy": {
#         "president": "Sergio Mattarella",
#         "prime minister": "Giuseppe Conte"
#     },
#     "India": {
#         "president": "Ram Nath Kovind",
#         "prime minister": "Narendra Modi"
#     },
#     "France": {
#         "president": "Emmanuel Macron",
#         "prime minister": "Edouard Philippe"
#     }
# }

# print("The president of", state, "is", heads_of_states[state]["president"], "and the prime minister is", heads_of_states[state]["prime minister"])


# ======================================================================

# ex2:

# user_id = 3058
# bonus_months = 3

# user_months = {
#     1552: 18,
#     7021: 2,
#     532: 12,
#     3058: 9,
#     1102: 4
# }

# user_months[user_id] += bonus_months

# print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")

# print(user_months[user_id])

# ===========================================================================

# ex3:

# country_populations= {}

# country_populations["Ghana"] = 28
# country_populations["Brazil"] = 209
# country_populations["Mongolia "] = 3

# country = "Ghana"
# print(country)

# output =  " is a small country" if country_populations[country] < 50 else " is a big country"
# print(country + output)

# ===========================================================

# ex4:
# tomato = "Tomato Soup"
# onion = "Onion Soup"
# carrot = "Carrot Soup"

# user_preferences = {
#     "Sarah": tomato,
#     "Sheila": carrot,
#     "Fernando": tomato,
#     "Jovan": onion,
#     "Simona": carrot
# }

# soup_recipes = {
#     tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
#     onion: "Be prepared to cry",
#     carrot: "Find a rabbit, ask him how to make a carrot soup"
# }

# user = "Jovan"

# print(soup_recipes[user_preferences[user]])

# ===========================================================

# Extension - Common Words Challenge

x = {
    "a": 1,
    "b": 2,
    1: "b",
    2: "a"
}

print(x[x[1]])
