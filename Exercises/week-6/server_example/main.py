import json
from fastapi import FastAPI
import uvicorn
import requests
import store

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def root():
    return FileResponse("./static/example.txt")


@app.get("/maps")
def maps():
    return "Here's some stuff related to maps"


@app.get("/shoobi")
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get("https://www.googleapis.com/books/v1/volumes?q={}".format(name))
    return res.json()


# ex1:
@app.get("/sanity")
def shoobi():
    return "Server is up and running smoothly"


@app.get("/catPic")
def cat_pic():
    return FileResponse("./static/images/cat_pic.jpg")


@app.get("/meowSound")
def meow_sound():
    return FileResponse("./static/audio/meowSound.wav")


# ex2:
@app.get("/productPrice/{name}")
def get_product_price(name):
    for product in store.store:
        if product["name"] == name:
            return {"price": product["price"]}
        return {"price": None}


# ex4:
@app.get("/buyProduct/{name}")
def buy_product(name):
    for product in store.store:
        if product["name"] == name:
            if product["inventory"] == 0:
                return "there is no from this item any more"
            product["inventory"] -= 1
            return product
    return store.store


# ex6:
@app.get("/sale/")
def sale(admin):
    if admin == "true":
        for product in store.store:
            if product["inventory"] > 10:
                product["price"] = 0.5 * product["price"]
        return store.store


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
