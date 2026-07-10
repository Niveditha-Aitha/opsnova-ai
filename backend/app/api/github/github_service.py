import os
import requests

ACCESS_TOKEN = None


CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
CLIENT_SECRET = os.getenv("GITHUB_CLIENT_SECRET")
REDIRECT_URI = os.getenv("GITHUB_REDIRECT_URI")


def get_access_token(code: str):

    token_url = "https://github.com/login/oauth/access_token"

    response = requests.post(
        token_url,
        headers={
            "Accept": "application/json"
        },
        data={
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "code": code,
            "redirect_uri": REDIRECT_URI,
        },
    )

    return response.json()


def get_user(access_token: str):

    response = requests.get(
        "https://api.github.com/user",
        headers={
            "Authorization": f"Bearer {access_token}"
        },
    )

    return response.json()

def get_repositories(access_token: str):

    response = requests.get(
        "https://api.github.com/user/repos",
        headers={
            "Authorization": f"Bearer {access_token}",
            "Accept": "application/vnd.github+json",
        },
    )

    return response.json()

def save_access_token(token: str):
    global ACCESS_TOKEN
    ACCESS_TOKEN = token


def get_saved_access_token():
    return ACCESS_TOKEN