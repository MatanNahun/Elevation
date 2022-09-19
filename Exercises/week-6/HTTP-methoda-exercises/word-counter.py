from fastapi import FastAPI
from fastapi import Request, Response
from fastapi import Body
import uvicorn

app = FastAPI()

wordCounter = {"hi": 2, "hello": 1}


@app.get("/")
def root():
    return {"message": "Server is up and running"}


# ex 1:
@app.get("/sanity")
def sanity():
    return {"message": "Server is up and running in sanity"}


# ex 2:
@app.get("/{word}")
def sanity(word):
    if word in wordCounter:
        return {"count": wordCounter[word]}
    else:
        return {"count": 0}


# ex 3:
@app.post("/add_word")
async def add_word(request: Request):
    new_word_object = await request.json()
    if new_word_object["word"] in wordCounter:
        wordCounter[new_word_object["word"]] += 1
    else:
        wordCounter[new_word_object["word"]] = 1
    return {
        "text": f"Added {new_word_object['word']}",
        "currentCount": wordCounter[new_word_object["word"]],
    }


# ex 4:
@app.post("/add_sentence")
async def add_sentence(request: Request):
    new_sentence_object = await request.json()
    words_arr = new_sentence_object["sentence"].split()
    numNewWords = 0
    numOldWords = 0
    for word in words_arr:
        if word in wordCounter:
            numOldWords += 1
            wordCounter[word] += 1
        else:
            numNewWords += 1
            wordCounter[word] = 1

    return {"text": f"Added {numNewWords} words, {numOldWords} already existed"}


# ex 5:
@app.delete("/delete_word/{word}", status_code=201)
def delete_word(word, response: Response):
    if word not in wordCounter:
        response.status_code = 404
        return response.status_code
    else:
        del wordCounter[word]
        return wordCounter


if __name__ == "__main__":
    uvicorn.run("word-counter:app", host="0.0.0.0", port=8000, reload=True)
