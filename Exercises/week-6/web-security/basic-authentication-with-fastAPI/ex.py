from typing import Tuple, List
from typing import Union
from starlette.requests import Request
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import uvicorn
from starlette.authentication import requires
from fastapi_auth_middleware import AuthMiddleware, FastAPIUser
from starlette.authentication import requires
from fastapi import Depends, FastAPI, HTTPException, status

app = FastAPI()
security = HTTPBasic()


def verify_authorization_header(
    auth_header: str,
) -> Tuple[
    List[str], FastAPIUser
]:  # Returns a Tuple of a List of scopes (string) and a BaseUser
    user = FastAPIUser(
        first_name="Code", last_name="Specialist", user_id=1
    )  # Usually you would decode the JWT here and verify its signature to extract the 'sub'
    scopes = (
        []
    )  # You could for instance use the scopes provided in the JWT or request them by looking up the scopes with the 'sub' somewhere
    return scopes, user


app.add_middleware(AuthMiddleware, verify_header=verify_authorization_header)


@app.get("/home")  # Sample endpoint (secured)
@requires("admin")  # Requires the role 'admin' (Will succeed)
def home(request: Request):
    return request.user


def get_current_username(credentials: HTTPBasicCredentials = Depends(security)):
    if not (credentials.username == "johnsmith") or not (
        credentials.password == "swordfish"
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Basic"},
        )

    return credentials.username


@app.get("/profile")
async def main(username: str = Depends(get_current_username)):
    return {"username": username}


# async def common_parameters(
#     q: Union[str, None] = None, skip: int = 0, limit: int = 100
# ):
#     return {"q": q, "skip": skip, "limit": limit}


# @app.get("/items")
# async def read_items(commons: dict = Depends(common_parameters)):
#     return commons


# @app.get("/users")
# async def read_items(commons: dict = Depends(common_parameters)):
#     return common


if __name__ == "__main__":
    uvicorn.run("ex:app", host="127.0.0.1", port=8000, log_level="info", reload=True)
