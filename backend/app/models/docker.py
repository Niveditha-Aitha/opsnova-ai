from pydantic import BaseModel

class DockerRequest(BaseModel):
    app_name: str
    language: str
    framework: str
    port: int

class DockerExplainRequest(BaseModel):
    dockerfile: str