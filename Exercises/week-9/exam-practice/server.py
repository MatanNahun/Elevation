from fastapi import FastAPI
from fastapi import Request, Response
import requests
import uvicorn
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()


app.mount("/client", StaticFiles(directory="client"), name="client")


@app.get("/")
def root():
    return FileResponse("index.html")


@app.get("/sanity")
def sanity():
    return {"message": "Server is up and running in sanity"}


@app.get("/name/{username}")
def greet_user(username):
    return {f"message:Hi there {username}"}


# localhost:3000/name?name=robert
@app.get("/name")
def greet_user(name):
    return {f"message:Hi there {name}"}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8020, reload=True)
