function ChatInput() {
  return (
    <div className="flex w-full max-w-4xl gap-4">

      <input
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-5 outline-none"
        placeholder="Ask anything about DevOps..."
      />

      <button className="bg-blue-600 px-8 rounded-xl hover:bg-blue-700">
        Generate
      </button>

    </div>
  );
}

export default ChatInput;