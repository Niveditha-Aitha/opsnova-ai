from pydantic import BaseModel


class GitHubUser(BaseModel):
    login: str
    name: str | None = None
    email: str | None = None
    avatar_url: str