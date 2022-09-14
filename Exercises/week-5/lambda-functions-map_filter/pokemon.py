import json

with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)


pokemon_data = list(
    map(
        lambda pokemon: {
            "id": pokemon["id"],
            "name": pokemon["name"],
            "type": pokemon["type"],
            "weight": pokemon["weight"],
            "height": pokemon["height"],
            "weaknesses": pokemon["weaknesses"],
        },
        pokemon_data,
    )
)

# print(pokemon_data[0])

pokemon_names = list(map(lambda pokemon: pokemon["name"], pokemon_data))
print(pokemon_names)

heavy_pokemon = list(filter(lambda pokemon: pokemon["weight"] > 100, pokemon_data))
print(len(heavy_pokemon))


weak_against_water_pokemon = list(
    map(
        lambda pokemon: pokemon["name"],
        (filter(lambda pokemon: "Water" in pokemon["weaknesses"], pokemon_data)),
    )
)


print(weak_against_water_pokemon)
