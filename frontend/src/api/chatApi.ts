const API = "http://127.0.0.1:8000";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
}

export interface ChatResponse {
  response: string;
}

export async function sendMessage(
  request: ChatRequest
): Promise<ChatResponse> {
  const res = await fetch(`${API}/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error("Failed to send message.");
  }

  return await res.json();
}