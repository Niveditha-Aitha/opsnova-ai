from fastapi import APIRouter, HTTPException
from fastapi.responses import RedirectResponse
from fastapi.responses import RedirectResponse
import os

from app.api.github.github_service import (
    get_access_token,
    get_user,
    get_repositories,
    save_access_token,
    get_saved_access_token,
)

router = APIRouter(
    prefix="/github",
    tags=["GitHub"],
)

CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
REDIRECT_URI = os.getenv("GITHUB_REDIRECT_URI")


@router.get("/login")
def github_login():

    github_url = (
        "https://github.com/login/oauth/authorize"
        f"?client_id={CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        "&scope=read:user user:email repo"
    )

    return RedirectResponse(url=github_url)


@router.get("/callback")
def github_callback(code: str):

    token = get_access_token(code)

    if "access_token" not in token:
        raise HTTPException(
            status_code=400,
            detail="Unable to authenticate with GitHub."
        )

    access_token = token["access_token"]

    save_access_token(access_token)

    return RedirectResponse(
    url="http://localhost:5173?github=connected"
)
    

@router.get("/profile")
def github_profile():

    token = get_saved_access_token()

    if not token:
        raise HTTPException(
            status_code=401,
            detail="GitHub not connected."
        )

    return get_user(token)

@router.get("/repositories")
def github_repositories():

    token = get_saved_access_token()

    if not token:
        raise HTTPException(
            status_code=401,
            detail="GitHub not connected."
        )

    return get_repositories(token)