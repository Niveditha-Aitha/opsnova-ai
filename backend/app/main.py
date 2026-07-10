from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.docker import router as docker_router
from app.api.kubernetes_api import router as kubernetes_router
from app.api.jenkins_api import router as jenkins_router
from app.api.terraform_api import router as terraform_router
from app.api.github_actions_api import router as github_actions_router
from app.api.ansible_api import router as ansible_router
from app.api.aws_api import router as aws_router
from app.api.cicd_api import router as cicd_router
from app.api.linux_api import router as linux_router
from app.api.troubleshooter_api import router as troubleshooter_router
from app.api.chat.chat_router import router as chat_router
from app.api.github.github_router import router as github_router


app = FastAPI(
    title="OpsNova AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(docker_router)
app.include_router(kubernetes_router)
app.include_router(jenkins_router)
app.include_router(terraform_router)
app.include_router(github_actions_router)
app.include_router(ansible_router)
app.include_router(aws_router)
app.include_router(cicd_router)
app.include_router(linux_router)
app.include_router(troubleshooter_router)
app.include_router(chat_router)
app.include_router(github_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to OpsNova AI 🚀"
    }