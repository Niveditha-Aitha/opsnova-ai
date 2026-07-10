import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../../api/chatApi";
import type { ChatMessage } from "../../api/chatApi";

type AIChatPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AIChatPanel({
  isOpen,
  onClose,
}: AIChatPanelProps) {

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome to OpsNova AI!\n\nI'm your personal DevOps Assistant.\n\nAsk me anything about Docker, Kubernetes, Jenkins, Terraform, AWS, Linux, CI/CD or DevOps best practices.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (!isOpen) return null;

  //----------------------------------------
  // Clear Chat
  //----------------------------------------

  const clearChat = () => {

    setMessages([
      {
        role: "assistant",
        content:
          "👋 Welcome to OpsNova AI!\n\nHow can I help you today?",
      },
    ]);

  };

  //----------------------------------------
  // Suggested Prompt
  //----------------------------------------

  const selectPrompt = (prompt: string) => {
    setInput(prompt);
  };

  //----------------------------------------
  // Send Message
  //----------------------------------------

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = input.trim();

    const updatedMessages: ChatMessage[] = [
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ];

    setMessages(updatedMessages);

    setInput("");

    try {

      setLoading(true);

      const result = await sendMessage({
        messages: updatedMessages,
      });

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: result.response,
        },
      ]);

    } catch {

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "❌ Unable to connect to OpsNova AI Server.",
        },
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="fixed inset-y-0 right-0 z-[99999] flex w-[430px] flex-col border-l border-slate-800 bg-slate-950 shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

        <div>

          <h2 className="text-2xl font-bold">
            🤖 OpsNova AI
          </h2>

          <p className="text-sm text-slate-400">
            Intelligent DevOps Assistant
          </p>

        </div>

        <div className="flex gap-2">

          <button
            onClick={clearChat}
            className="rounded-lg bg-slate-800 px-3 py-2 text-sm transition hover:bg-slate-700"
          >
            Clear
          </button>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-3 py-2 transition hover:bg-slate-700"
          >
            ✕
          </button>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {/* Suggested Questions */}

        {messages.length === 1 && (
          <div>

            <p className="mb-4 text-sm font-semibold text-slate-400">
              Quick Start
            </p>

            <div className="space-y-3">

              <button
                onClick={() => selectPrompt("Explain Docker")}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-left transition hover:border-blue-500 hover:bg-slate-800"
              >
                🐳 Explain Docker
              </button>

              <button
                onClick={() => selectPrompt("Explain Kubernetes")}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-left transition hover:border-blue-500 hover:bg-slate-800"
              >
                ☸ Explain Kubernetes
              </button>

              <button
                onClick={() => selectPrompt("Generate Jenkins Pipeline")}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-left transition hover:border-blue-500 hover:bg-slate-800"
              >
                ⚙ Generate Jenkins Pipeline
              </button>

              <button
                onClick={() => selectPrompt("Explain Terraform")}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-left transition hover:border-blue-500 hover:bg-slate-800"
              >
                🌍 Explain Terraform
              </button>

            </div>

          </div>
        )}

        {/* Chat Messages */}

        {messages.map((message, index) => (

          <div
            key={index}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-lg whitespace-pre-wrap ${
                message.role === "user"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "border border-slate-700 bg-slate-900 text-slate-200"
              }`}
            >

              <div className="mb-2 text-xs font-semibold uppercase tracking-wider opacity-70">

                {message.role === "user"
                  ? "You"
                  : "🤖 OpsNova AI"}

              </div>

              <div className="leading-7">

                {message.content}

              </div>

            </div>

          </div>

        ))}

        {/* Thinking */}

        {loading && (

          <div className="flex justify-start">

            <div className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4">

              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                🤖 OpsNova AI
              </div>

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>

                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
                  style={{ animationDelay: "0.15s" }}
                ></span>

                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-blue-300"
                  style={{ animationDelay: "0.3s" }}
                ></span>

                <span className="ml-2 text-sm text-slate-400">
                  Thinking...
                </span>

              </div>

            </div>

          </div>

        )}

        <div ref={bottomRef}></div>

      </div>

      {/* Input Area */}

      <div className="border-t border-slate-800 bg-slate-950 p-5">

        <div className="flex gap-3">

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask anything about DevOps..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>

        </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">

          <span>
            Press <span className="font-semibold text-slate-300">Enter</span> to send
          </span>

          <span>
            OpsNova AI v1.0
          </span>

        </div>

      </div>

    </div>

  );
}

export default AIChatPanel;