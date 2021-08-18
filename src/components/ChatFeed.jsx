import MyMesssage from './MessageForm';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
const ChatFeed= (props)=>{

     const { Chats,activeChat,userName,messgaes}=props;

     const chat= chats && chats[activeChat];

     const renderMessages=() =>{

         const keys=Object.keys(messgaes);

         return keys.map( (key,index)=>
         {
             const message=messages[key];
             const lastMessageKey= index === 0? null : keys[index-1];
             const isMyMessage= userName === messgae.sender.userName;
             return(
                 <div key={`msg_${index}`} style={{ width: '100%' }}>
                     <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
              {renderReadReceipts(message, isMyMessage)}
          </div>
         </div>
             );

         });
     };
    return(
        <div>
            <div className="chat-feed">
              <div className="chat-title-container">
                  <div className="chat-title">
                      {chat?.title}
                  </div>
                  <div className="chat-subtitle">

                  </div>
                  {renderMessages()}
                  <div style={{ height:'100px'}} />
                  <div className="message-form-container">
                  <MessageForm {...props} chatId={activeChat} />
                  </div>
              </div>

            </div>
        </div>
    )
}
export default ChatFeed;