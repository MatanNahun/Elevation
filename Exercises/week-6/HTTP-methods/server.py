from fastapi import FastAPI
from fastapi import Request
from fastapi import Body
import uvicorn

app = FastAPI()

wonders = [{"ID": 1, "name": "The Great Pyramid", "location": "Giza"}]


@app.get("/")
def root():
    return {"message": "Server is up and running"}


id_counter = 1


@app.post("/wonders", status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter
    id_counter += 1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"


@app.put("/items/{id}")
async def items(id, name=Body(...), location=Body(...)):
    print(id)
    print(f"username: ${name}, password ${location}")
    return "done"


@app.get("/wonders/{id}")
def wonders_data(id):
    for wonder in wonders:
        if wonder["ID"] == int(id):
            return wonder
    return "there is no such a wonder"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
