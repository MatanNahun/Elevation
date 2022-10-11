1. General Movie CRUD (show here examples of request response per endpoint)

Creating a new Actor-

POST http://api.movieapp.com/movies HTTP/1.1

{
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 9.2,
"review": 8.9
"runtime ": 120
}

---

HTTP/1.1 201 Created
Location: /movies/789

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 9.2,
"review": 8.9
"runtime ": 120
}

---

GET http://api.movieapp.com/movies/page=3 HTTP/1.1

HTTP/1.1 200 OK
[
{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 9.2,
"review": 8.9
"runtime ": 120
}

{
"id": 790,
"title": "Robin Hood",
"plot":" a hero that stil from the rich and give to the poors....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 4100000,
"revenue": 6100000,
"genres": ["Drama", Family],
"popularity": 9.1,
"review": 8.4
"runtime ": 124
}
]

---

<!-- delete specific actor -->

DELETE http://api.movieapp.com/movies/789 HTTP/1.1

<!-- response: -->

## HTTP/1.1 204 OK

---

PUT http://api.movieapp.com/movies/789 HTTP/1.1

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
}

---

HTTP/1.1 200 OK

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
}

======================================================================

2. General Actor CRUD (show here examples of request response per endpoint)

Creating a new Actor-

POST http://api.movieapp.com/actors HTTP/1.1

{
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}

---

HTTP/1.1 201 Created
Location: /actors/283

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}

---

<!-- error with unvalid key -->

HTTP/1.1 400 Bad Request
Content-Type: application/json

{
"error": "Invalid data",
"details": {
"name": "required"
}
}

GET http://api.movieapp.com/actors/page=3 HTTP/1.1

HTTP/1.1 200 OK
[
{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}

{
"id": 284,
"name": "Julia Roberts",
"bio": "Julia Bradley Roberts (born October 18, 1973) is…",
"birthday": "1973-10-18",
"deathday": null,
"gender": 1,
"popularity": 9.93
}
.
.
.
]

---

<!-- delete specific actor -->

DELETE http://api.movieapp.com/actors/276 HTTP/1.1

<!-- response: -->

## HTTP/1.1 204 OK

PUT http://api.movieapp.com/actors/283 HTTP/1.1

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 10.0
}

---

HTTP/1.1 200 OK

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 10.0
}

---

<!-- error with unvalid key -->

HTTP/1.1 400 Bad Request
Content-Type: application/json

{
"error": "Invalid data",
"details": {
"name": "required"
}

=============================================

3. Get actors of a specific movie.

GET http://api.movieapp.com/actors?movieID=789

---

HTTP/1.1 200 OK

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 10.0
}
.
.
.

=============================================

4. Add an actor to a specific movie.

PUT http://api.movieapp.com/movies/789?actor=283

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": [283]
}

---

HTTP/1.1 204 OK

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": 283
}

========================================= 5) Remove an actor from a specific movie

DELETE http://api.movieapp.com/movies/789?actor=283

---

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 8100000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": ""
}

=============================================

6. Get the top 3 stars (most popular actors) of a specific movie

GET http://api.movieapp.com/movies/789/top3

---

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 10.0
}
.
.
.
=========================================== 7) Update a specific movie’s revenue.

PUT http://api.movieapp.com/movies/789

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 5000000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": ""
}

====================================== 8) Get the top 10 action movies

GET http://api.movieapp.com/movies?top=10

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 5000000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": "283"
}
.
.
.

====================================== 9)

GET http://api.movieapp.com/movies?gender=drama&actors=283

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 5000000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": "283"
}

======================================== 10) Get the top 3 most popular movies of a specific actor

GET http://api.movieapp.com/movies?top=10&actors=283

{
"id": 789,
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 5000000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": "283"
}
============================================

11. Create 5 actors in a single request.

PUT http://api.movieapp.com/movies

{
"title": "Harry Potter",
"plot": " a magician that was the one to kill voldemort....",
"poster": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
"budget": 2100000,
"revenue": 5000000,
"genres": ["Drama", Family],
"popularity": 10.0,
"review": 8.9
"runtime ": 120
"actors": "283"
}
.
.
.
