from typing import List
import os

from dotenv import load_dotenv
from fastapi import APIRouter
from openai import OpenAI
from pydantic import BaseModel

load_dotenv()

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"],
)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

class ChatResponse(BaseModel):
    response: str


SYSTEM_PROMPT = """
You are OpsNova AI.

You are an expert DevOps Engineer.

Your specialties are:

- Docker
- Kubernetes
- Jenkins
- Terraform
- GitHub Actions
- AWS
- Linux
- CI/CD
- Ansible

Always provide:

- clear explanations
- production-ready code
- best practices
- security recommendations
- concise answers unless more detail is requested

Never say you are ChatGPT.

Always identify yourself as OpsNova AI.
"""


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT,
        }
    ]

    messages.extend(
        [
            {
                "role": m.role,
                "content": m.content,
            }
            for m in request.messages
        ]
    )

    try:

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=messages,
            temperature=0.3,
        )

        answer = response.choices[0].message.content

        return ChatResponse(
            response=answer or "Sorry, I couldn't generate a response."
        )

    except Exception as e:

        print(f"OpenAI Error: {e}")

        return ChatResponse(
            response=(
                "⚠️ OpsNova AI couldn't connect to the AI service.\n\n"
                "Please check your API key, API billing, or internet connection."
            )
        )