import type { ChatMessage } from "../types/chat";

export const dummyMessages: ChatMessage[] = [

    {
        id:1,
        sender:"user",
        message:"How do I deploy a FastAPI application using Kubernetes?"
    },

    {
        id:2,
        sender:"ai",
        message:"I can help you deploy your FastAPI application using Docker, Kubernetes and Terraform."
    }

];