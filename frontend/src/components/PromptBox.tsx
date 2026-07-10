function PromptBox() {
  return (

    <div className="flex justify-center mt-16">

      <div className="w-full max-w-3xl flex gap-4">

        <input
          type="text"
          placeholder="Ask anything about DevOps..."
          className="flex-1 rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none"
        />

        <button className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl">
          Generate
        </button>

      </div>

    </div>

  );
}

export default PromptBox;