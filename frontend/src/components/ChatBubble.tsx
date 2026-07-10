import type { ChatMessage } from "../types/chat";

type Props={
    chat:ChatMessage;
}

function ChatBubble({chat}:Props){

    const isUser=chat.sender==="user";

    return(

        <div
        className={`flex ${isUser ? "justify-end":"justify-start"} mb-5`}
        >

            <div
            className={`max-w-xl rounded-2xl p-5

            ${
                isUser
                ?

                "bg-blue-600 text-white"

                :

                "bg-slate-800 text-slate-200"

            }`}
            >

                {chat.message}

            </div>

        </div>

    )

}

export default ChatBubble;