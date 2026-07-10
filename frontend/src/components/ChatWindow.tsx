import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import { dummyMessages } from "../data/dummyMessages";

function ChatWindow() {

    return(

        <div className="flex-1 flex flex-col justify-between p-10">

            <div>

                <h1 className="text-4xl font-bold mb-10">

                    OpsNova AI Assistant

                </h1>

                {

                    dummyMessages.map(chat=>(

                        <ChatBubble
                        key={chat.id}
                        chat={chat}
                        />

                    ))

                }

            </div>

            <ChatInput/>

        </div>

    )

}

export default ChatWindow;