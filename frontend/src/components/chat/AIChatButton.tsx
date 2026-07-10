type AIChatButtonProps = {
  onClick: () => void;
};

function AIChatButton({ onClick }: AIChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-24 right-8 z-[99999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-3xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
    >
      🤖
    </button>
  );
}

export default AIChatButton;